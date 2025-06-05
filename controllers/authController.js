const User = require('../models/UserModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Generate JWT token
const generateToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });
};

// Signup 
const signup = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existing = await User.findOne({ email });
        if (existing) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const user = await User.create({ name, email, password });
        const token = generateToken(user._id);
        res.status(201).json({
            message: 'Signup successful 🎉',
            user: { name: user.name, email: user.email },
            token
        });
    } catch (err) {
        res.status(500).json({ message: 'Signup failed', error: err.message });
    }
};

// Login 
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = generateToken(user._id);
        res.status(200).json({
            message: 'Login successful ✅',
            user: { name: user.name, email: user.email },
            token
        });
    } catch (err) {
        res.status(500).json({ message: 'Login failed', error: err.message });
    }
};

module.exports = {
    signup,
    login
};
