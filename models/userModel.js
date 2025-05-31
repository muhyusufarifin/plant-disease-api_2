const pool = require('../config/db');

const User = {
  async create({ name, email, password }) {
    const [result] = await pool.execute(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [name, email, password]
    );
    return result.insertId;
  },

  async findByEmail(email) {
    const [rows] = await pool.execute('SELECT * FROM users WHERE email = ?', [email]);
    return rows[0];
  },

  async findById(id) {
    const [rows] = await pool.execute('SELECT id, name, email, created_at FROM users WHERE id = ?', [id]);
    return rows[0];
  }
};

module.exports = User;