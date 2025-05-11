import express from 'express'
import { forgotPassword, getUser, login, logout, registerUser, resetPassword, verifyUser } from '../controller/user.controller.js'
import { isLoggedIn } from '../middleware/auth.middleware.js'

const router = express.Router()

router.post("/register", registerUser)
router.get("/verify/:token", verifyUser)
router.post("/login", login)
router.post("/profile", isLoggedIn, getUser)
router.post("/logout", isLoggedIn, logout)
router.post("/forgotpassword", forgotPassword)
router.post("/reset/:token", resetPassword)

export default router