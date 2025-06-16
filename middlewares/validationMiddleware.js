const Joi = require('joi');

// Custom regex for strong password
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

// Custom regex for email validation 
const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

// Signup validation
const validateSignup = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(4).required(),
        email: Joi.string().pattern(emailPattern).required().messages({
            'string.pattern.base': 'Please enter a valid email address',
        }),
        password: Joi.string().pattern(passwordPattern).required().messages({
            'string.pattern.base': 'Password must include uppercase, lowercase, number, and special character',
        }),
    });

    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });
    next();
};

// Login validation
const validateLogin = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().pattern(emailPattern).required().messages({
            'string.pattern.base': 'Please enter a valid email address',
        }),
        password: Joi.string().pattern(passwordPattern).required().messages({
            'string.pattern.base': 'Invalid password format',
        }),
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
        tags: Joi.array().items(Joi.string()).optional(),
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
