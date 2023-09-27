const pool = require('../config/database');

async function getUsers() {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query('SELECT * FROM users');
    return rows;
  } finally {
    connection.release();
  }
}


async function createUser(user) {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query(
      'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
      [user.username, user.email, user.password]
    );
    return rows.insertId;
  } finally {
    connection.release();
  }
}

// Function to get a user by ID
async function getUserById(userId) {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query('SELECT * FROM users WHERE id = ?', [
      userId,
    ]);
    return rows[0];
  } finally {
    connection.release();
  }
}

// Function to update a user by ID
async function updateUserById(userId, updatedUser) {
  const connection = await pool.getConnection();
  try {
    await connection.query(
      'UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?',
      [updatedUser.username, updatedUser.email, updatedUser.password, userId]
    );
    return true;
  } finally {
    connection.release();
  }
}

// Function to delete a user by ID
async function deleteUserById(userId) {
  const connection = await pool.getConnection();
  try {
    await connection.query('DELETE FROM users WHERE id = ?', [userId]);
    return true;
  } finally {
    connection.release();
  }
}

module.exports = {
  getUsers,
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
};