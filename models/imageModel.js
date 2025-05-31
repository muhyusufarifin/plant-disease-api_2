const pool = require('../config/db');

const Image = {
  async create({ userId, filename }) {
    const [result] = await pool.execute(
      'INSERT INTO images (user_id, filename) VALUES (?, ?)',
      [userId, filename]
    );
    return result.insertId;
  },

  async findByUserId(userId) {
    const [rows] = await pool.execute('SELECT * FROM images WHERE user_id = ? ORDER BY uploaded_at DESC', [userId]);
    return rows;
  }
};

module.exports = Image;