import Meeting from "../models/meeting.model.js";
import Summary from "../models/summary.model.js"

import { inngest } from "../inngest/client.js"

export const saveMeetings = async (req, res) => {

    try {
        
        const {meetingText} = req.body;
        // console.log("Meeting text in meeting controller: ", meetingText);
        
        if(!meetingText) return res.status(400).json({message: "Transcript unavailable"})

        const newMeeting = await Meeting.create({
            transcript: meetingText,
            status: "processing"
        })

        console.log("Meeting created: ", newMeeting);

        const summaryId = await inngest.send({
            name: "meeting/summary.requested",
            data: {
                meetingId: newMeeting._id.toString(),
                transcript: meetingText
            }
        })
        
        return res.status(200).json({message: "Meeting Transcript saved in DB", summaryId});

    } catch (error) {
        console.error("Error creating Meeting:", error);
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        })
    }

}
