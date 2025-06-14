const Task = require("../models/TaskModel");
const sendEmail = require("../utils/sendEmail");

// Create a task
const createTask = async (req, res) => {
    try {
        const task = await Task.create({ ...req.body, userRef: req.user._id });
        await sendEmail({
            to: req.user.email,
            subject: "✅ New Task Created",
            text: `A new task "${task.title}" is created with status "${task.status}".`,
        });
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

// Get all tasks with filtering, pagination, and sorting

const getAllTasks = async (req, res) => {
    try {
        const { status, page = 1, limit = 5, sortBy = 'dueDate', order = 'asc' } = req.query;

        // filter object
        const filter = { userRef: req.user._id };
        if (status) filter.status = status;

        // Sorting logic
        const sortOrder = order === 'desc' ? -1 : 1;
        const sort = { [sortBy]: sortOrder };

        // Pagination
        const skip = (page - 1) * limit;

        const tasks = await Task.find(filter)
            .sort(sort)
            .skip(skip)
            .limit(Number(limit));

        const total = await Task.countDocuments(filter);

        res.status(200).json({
            message: "📋 Filtered tasks fetched successfully!",
            count: tasks.length,
            page: Number(page),
            totalPages: Math.ceil(total / limit),
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
