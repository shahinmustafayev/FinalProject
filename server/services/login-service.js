const pool = require('../config/db');
const checkUserData = async (username) => {
    const result = await pool.query("SELECT u.username, u.password FROM users u WHERE u.username = $1", [username]);
    return result.rows;
}

module.exports = {
    checkUserData
}