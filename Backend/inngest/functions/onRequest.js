import { inngest } from "../client.js";
import Summary from "../../models/summary.model.js";
import Meeting from "../../models/meeting.model.js";
import generateSummary from "../../utils/agent.util.js";
import { NonRetriableError } from "inngest";

export const onSummaryRequest = inngest.createFunction(
    { id: "on-summary-request", retries: 2 },
    { event: "meeting/summary.requested" },
    async ({ event, step }) => {
        try {
            const { meetingId, transcript} = event.data;

            // Step 1: Generate and accept summary from AI agent
            console.log("Calling generateSummary...");
            const response = await generateSummary(transcript);
            console.log("generateSummary response:", response);
            if (!response) throw new NonRetriableError("Failed to parse AI response");
            const {
                title,
                summary,
                key_points,
                decisions,
                action_items,
                tags
            } = response;

            // Step 2: Save to DB
            const savedSummary = await step.run("Save Summary", async () => {
                return await Summary.create({
                    meetingId,
                    summaryText: summary,
                    keyPoints: key_points,
                    decisions,
                    actionItems: action_items.map((item) => ({
                        task: item,
                        assignee: "TBD",
                        due: null
                    })),
                    tags,
                    status: "done"
                });
            });

            // Step 3: Update Meeting
            const meeting = await Meeting.findById(meetingId);
            if (!meeting) throw new NonRetriableError("Meeting not found!");

            await step.run("Update Meeting", async () => {
                await Meeting.findByIdAndUpdate(meetingId, {
                    title: title || "Untitled Meeting",
                    summaryId: savedSummary._id,
                    status: "completed"
                });
            });

            console.log("Summary created with ID:", savedSummary._id);
            return { summaryId: savedSummary._id };

        } catch (error) {
            console.error("AI workflow error: ", error.message);
            throw error; // So Inngest knows it failed and retries if applicable
        }
    }
);
