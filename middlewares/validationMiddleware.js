const Joi = require('joi');

// Signup validation
const validateSignup = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(4).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
    });

    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });
    next();
};

// Login validation
const validateLogin = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(4).optional(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
    });

    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });
    next();
};

// Task validation
const validateTask = (req, res, next) => {
    const schema = Joi.object({
        title: Joi.string().required(),
        status: Joi.string().valid('pending', 'in progress', 'completed').required(),
        dueDate: Joi.date().optional(),
    });

    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });
    next();
};

module.exports = {
    validateSignup,
    validateLogin,
    validateTask,
};
