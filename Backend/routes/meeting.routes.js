import express from "express"
import { saveMeetings } from "../controllers/meeting.controller.js"

const router = express.Router()

router.post("/", saveMeetings)

export default router;