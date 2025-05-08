import express from 'express'
import { getUser, login, registerUser, verifyUser } from '../controller/user.controller.js'
import { isLoggedIn } from '../middleware/auth.middleware.js'

const router = express.Router()

router.post("/register", registerUser)
router.get("/verify/:token", verifyUser)
router.post("/login", login)
router.post("/userProfile",isLoggedIn, getUser)

export default router