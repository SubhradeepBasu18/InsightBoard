import jwt from "jsonwebtoken";
import Users from "../models/user.model.js";

const verifyJWT = async(req, res, next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer","")

        if(!token) return res.status(400).json({message: "Token Not found"});

        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        
        const foundUser = await Users.findById(decoded?._id)
                                    .select("-password -refreshToken")

        if(!foundUser) return res.status(404).json({message: "Invalid Access Token"})
        
        req.user = foundUser
        next()

    } catch (error) {
        return res.status(401).json({message: "Invalid access token"})
    }
}

export {verifyJWT}