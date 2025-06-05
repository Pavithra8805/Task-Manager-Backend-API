const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db');

const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();

// Basic route to test server
app.get('/', (req, res) => {
    res.status(200).send("Task Manager Backend API is running");
});

// Routes
app.use('/api/auth', require('./routes/authRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});
