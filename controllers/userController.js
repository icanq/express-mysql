const userService = require('../services/userService');

// get all users
async function getUsers(req, res) {
  try {
    const users = await userService.getUsers();
    res.status(200).json({
      message: "Successfully fetched all users",
      data: users
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}


// Create a new user
async function createUser(req, res) {
  try {
    const userId = await userService.createUser(req.body);
    res.status(201).json({ userId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Get a user by ID
async function getUserById(req, res) {
  const { userId } = req.params;
  try {
    const user = await userService.getUserById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({
      message: "Successfully fetched user",
      data: user
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Update a user by ID
async function updateUserById(req, res) {
  const { userId } = req.params;
  try {
    const user = await userService.getUserById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // ketika ada request body username, dan request body username tidak sama dengan user.username maka user.username akan diupdate

    if (req.body.username && req.body.username !== user.username) { 
      user.username = req.body.username;
    }

    // ketika ada request body email, dan request body email tidak sama dengan user.email maka user.email akan diupdate
    
    if (req.body.email && req.body.email !== user.email) {
      user.email = req.body.email;
    }

    // ketika ada request body password, dan request body password tidak sama dengan user.password maka user.password akan diupdate
    
    if (req.body.password && req.body.password !== user.password) {
      user.password = req.body.password;
    }

    await userService.updateUserById(userId, user);
    res.status(200).json({
      message: "Successfully update user",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Delete a user by ID
async function deleteUserById(req, res) {
  const { userId } = req.params;
  try {
    const user = await userService.getUserById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const deleted = await userService.deleteUserById(userId);
    res.status(200).json({
      message: "Successfully delete user",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  getUsers,
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
};