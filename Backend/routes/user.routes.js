import express from "express"
import { loginUser, logoutUser, signUpUser } from "../controllers/user.controller.js"
import { verifyJWT } from "../middlewares/auth.middleware.js"

const router = express.Router()

router.post("/signup", signUpUser)
router.post("/login", loginUser)
router.post("/logout", verifyJWT, logoutUser)

export default router