const express = require('express');
const router = express.Router();
const { createTask, getAllTasks, getTaskById, updateTask, deleteTask } = require('../controllers/taskController');
const { validateTask } = require('../middlewares/validationMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

// Protect all task routes
router.use(authMiddleware);

router.post('/', validateTask, createTask);
router.get('/', getAllTasks);
router.get('/:id', getTaskById);
router.put('/:id', validateTask, updateTask);
router.delete('/:id', deleteTask);

module.exports = router;
