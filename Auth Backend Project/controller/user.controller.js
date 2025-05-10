import User from "../model/User.model.js"
import crypto from "crypto"
import nodemailer from "nodemailer"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({
            message: "All fields are required!"
        });
    }
    try {
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({
                message: "User already exists!"
            });
        }

        const user = await User.create({
            name,
            email,
            password
        })
        console.log(user);


        if (!user) {
            return res.status(400).json({
                message: "User not registered!"
            });
        }

        const token = crypto.randomBytes(32).toString("hex")
        console.log(token);
        user.verificationToken = token

        await user.save()

        //send email
        const transporter = nodemailer.createTransport({
            host: process.env.MAILTRAP_HOST,
            port: process.env.MAILTRAP_PORT,
            secure: false, // true for port 465, false for other ports
            auth: {
                user: process.env.MAILTRAP_USERNAME,
                pass: process.env.MAILTRAP_PASSWORD,
            },
        });

        const mailOption = {
            from: process.env.MAILTRAP_SENDEREMAIL,
            to: user.email, // list of receivers
            subject: "Proceed with verification",
            text: `Please click on the following link:
            ${process.env.BASE_URL}/api/v1/users/verify/${token}`,
        };

        await transporter.sendMail(mailOption);

        console.log("User Successfully Registered")

        res.status(201).json({
            message: "User registered successfully",
            success: true
        })

    } catch (error) {
        console.log(error)
        res.status(400).json({
            message: "User not registered",
            error,
            success: false
        })
    };
};

const verifyUser = async (req, res) => {
    const { token } = req.params;
    if (!token) {
        return res.status(400).json({
            message: "Invalid token"
        });
    }
    const user = await User.findOne({ verificationToken: token })

    if (!user) {
        return res.status(400).json({
            message: "Invalid token"
        });
    }

    user.isVerified = true;
    user.verificationToken = undefined;
    await user.save()

    res.status(200).json({
        success: true,
        message: "Verification Successful!",
        token,
        user: {
            id: user._id,
            name: user.name,
            role: user.role
        }
    });
    console.log("User Successfully Verified")
}

const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            message: "All fields are required!"
        });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "Invalid email or password!"
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid email or password!"
            });
        }

        if (!user.isVerified) {
            return res.status(400).json({
                message: "Please verify the email before login!"
            });
        }

        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET, // use env variable
            { expiresIn: '24h' }
        );

        const cookieOptions = {
            httpOnly: true,
            secure: true, // set to false for development if needed
            maxAge: 24 * 60 * 60 * 1000
        };

        res.cookie("token", token, cookieOptions);

        res.status(200).json({
            success: true,
            message: "Login Successful!",
            token,
            user: {
                id: user._id,
                name: user.name,
                role: user.role
            }
        });


        console.log("User Successfully Logged In")

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Unable to login",
            error: error.message,
            success: false
        });
    }
}

const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.user.id)
            .select('-password')

        console.log(user);

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "All fields are required!"
            });
        }

        res.status(200).json({
            success: true,
            user,
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Unable to Get User",
            error: error.message,
            success: false
        });
    }
}

const logout = async (req, res) => {
    try {
        res.clearCookie('token', {
            httpOnly: true,
            secure: true,
            sameSite: 'None'
        });
        console.log("Log Out Successful!");
        return res.status(200).json({
            success: true,
            message: "Logged out Successfully"
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Unable to logout",
            success: false
        });
    }
}


const forgotPassword = async (req, res) => {
    try {

    } catch (error) {

    }
}

const ResetPassword = async (req, res) => {
    try {

    } catch (error) {

    }
}

export { registerUser, verifyUser, login, getUser, logout, forgotPassword, ResetPassword };