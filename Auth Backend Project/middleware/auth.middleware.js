import jwt from "jsonwebtoken"
import User from "../model/User.model.js";

export const isLoggedIn = async (req, res, next) => {
    try {
        console.log(req.cookies);
        let token = req.cookies?.token

        console.log('Token Found:', token ? 'Yes' : 'No');

        if (!token) {
            console.log("No Token Found!");
            return res.status(401).json({
                success: false,
                message: "No Token Found! User not logged In"
            });

        }

        const decoded = await jwt.verify(token, process.env.JWT_SECRET)
        console.log("decoded data: ", decoded);
        // const userId = await User.findById(decoded.id)
        req.user = decoded;

        next()

    } catch (error) {
        console.log("Auth Middleware Faliure");
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        });

    }
}