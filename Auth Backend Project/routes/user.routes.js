import express from 'express'
import { getUser, login, logout, registerUser, verifyUser } from '../controller/user.controller.js'
import { isLoggedIn } from '../middleware/auth.middleware.js'

const router = express.Router()

router.post("/register", registerUser)
router.get("/verify/:token", verifyUser)
router.post("/login", login)
router.post("/me", isLoggedIn, getUser)
router.post("/logout", isLoggedIn, logout)

export default router