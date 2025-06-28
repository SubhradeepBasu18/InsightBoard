import mongoose from "mongoose";

const actionItemSchema = new mongoose.Schema({
    task: {
        type: String 
    },
    assignee: {
        type: String 
    },
    due: {
        type: String 
    } // store as string or Date based on how you collect it
});

const summarySchema = new mongoose.Schema({
    meetingId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Meeting", 
        required: true 
    },
    generatedBy: { 
        type: String, 
        default: "gemini-1.5-pro" 
    },
    summaryText: { 
        type: String 
    },
    keyPoints: [String],
    decisions: [String],
    actionItems: [actionItemSchema],
    generatedAt: { 
        type: Date, 
        default: Date.now 
    },
    status: { 
        type: String, 
        enum: ["done", "error"], 
        default: "done" 
    }
});

export default mongoose.model("Summary", summarySchema);
