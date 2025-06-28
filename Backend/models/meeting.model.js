import mongoose, { model } from "mongoose";

const meetingSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },

    title: {
        type: String,
        // required: true,
    },

    transcript : {
        type: String,
        required: true,
    },

    filePath: {
        type: String,
    },

    fileType: { 
        type: String, 
        enum: ["txt", "docx", "pdf"], 
        default: "txt" 
    },

    status: { 
        type: String, 
        enum: ["processing", "completed", "failed"], 
        default: "processing" 
    },

    summaryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Summary"
    },

    createdAt: {
        type: Date,
        default: Date.now()
    }
})

export default mongoose.model("Meeting", meetingSchema)