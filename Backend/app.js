import { configDotenv } from "dotenv"
import express from "express"
import mongoose from "mongoose";
import meetingRoute from "./routes/meeting.routes.js"
import userRoute from "./routes/user.routes.js"
import { onSummaryRequest } from "./inngest/functions/onRequest.js";
import {serve} from "inngest/express"
import {inngest} from "./inngest/client.js"
import cookieParser from "cookie-parser";
configDotenv();

const app = express()
app.use(express.json())
app.use(cookieParser())
const port = process.env.PORT || 3001

app.use("/api/meeting", meetingRoute)
app.use("/api/user", userRoute)

app.use("/api/inngest", serve({
    client:inngest,
    functions: [onSummaryRequest]
}))


mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("Connected to Mongo");
        
        app.listen(port, () => {
            console.log(`Server listening on port ${port}`);
            
        })
    })