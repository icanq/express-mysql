const express = require('express');
const userController = require('../controllers/userController');
const userRoutes = express.Router();

// get all users
userRoutes.get('/', userController.getUsers);

// Create a new user
userRoutes.post('/', userController.createUser);

// Get a user by ID
userRoutes.get('/:userId', userController.getUserById);

// Update a user by ID
userRoutes.put('/:userId', userController.updateUserById);

// Delete a user by ID
userRoutes.delete('/:userId', userController.deleteUserById);

module.exports = { userRoutes };