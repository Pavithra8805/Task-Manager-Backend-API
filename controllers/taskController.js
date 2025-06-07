const Task = require("../models/TaskModel");

// Create a task
const createTask = async (req, res) => {
    try {
        const task = await Task.create({ ...req.body, userRef: req.user._id });
        res.status(201).json({
            message: "✅ Task created successfully!",
            task,
        });
    } catch (err) {
        res.status(500).json({
            message: "❌ Failed to create task. Please try again.",
            error: err.message,
        });
    }
};

// Get all tasks
const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ userRef: req.user._id });
        res.status(200).json({
            message: "📋 All tasks fetched successfully!",
            count: tasks.length,
            tasks,
        });
    } catch (err) {
        res.status(500).json({
            message: "❌ Failed to fetch tasks. Please try again later.",
            error: err.message,
        });
    }
};

// Get task by ID
const getTaskById = async (req, res) => {
    try {
        const task = await Task.findOne({ _id: req.params.id, userRef: req.user._id });
        if (!task) {
            return res.status(404).json({
                message: "⚠️ Task not found or you don't have access to it.",
            });
        }
        res.status(200).json({
            message: "✅ Task fetched successfully!",
            task,
        });
    } catch (err) {
        res.status(500).json({
            message: "❌ Error fetching the task.",
            error: err.message,
        });
    }
};

// Update task by ID
const updateTask = async (req, res) => {
    try {
        const updated = await Task.findOneAndUpdate(
            { _id: req.params.id, userRef: req.user._id },
            req.body,
            {
                new: true,
            }
        );
        if (!updated) {
            return res.status(404).json({
                message: "⚠️ Cannot update. Task not found or access denied.",
            });
        }
        res.status(200).json({
            message: "✅ Task updated successfully!",
            updated,
        });
    } catch (err) {
        res.status(500).json({
            message: "❌ Failed to update task.",
            error: err.message,
        });
    }
};

// Delete task by ID
const deleteTask = async (req, res) => {
    try {
        const deleted = await Task.findOneAndDelete({ _id: req.params.id, userRef: req.user._id });
        if (!deleted) {
            return res.status(404).json({
                message: "⚠️ Task not found or deletion not allowed.",
            });
        }
        res.status(200).json({
            message: "🗑️ Task deleted successfully!",
        });
    } catch (err) {
        res.status(500).json({
            message: "❌ Failed to delete task.",
            error: err.message,
        });
    }
};

module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask,
};
