import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const signup = async (req,res) => {
    try {
        const { name, email, password, address, phone, pinCode } = req.body;

        // Basic validation
        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "User already exists" });
        }
        // Create new user
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.error("Signup Error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const login = async (req,res) => {
    try {
        const { email, password } = req.body;
        // Basic validation
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }
        // Check if user exists
        const user = await User.findOne({ email }).select('+password')
        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
         if(!isMatch){
            return res.status(401).json({ message: "Invalid password" });
         }

        // token generation can be added here
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const home = async (req, res) => {
    try {
        res.status(200).json({ message: "Welcome to the Home Page" });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const getUserDetails = async (req,res) => {
    try {
        const {userId} = req.params;
        const user = await User.findById(userId).select('-password');
        if(!user){
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error("Error fetching user details:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}


export { signup, home, login, getUserDetails };