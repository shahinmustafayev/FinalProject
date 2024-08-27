const pool = require('../config/db');
const checkUsernameData = async username => {
    const result = await pool.query("SELECT u.username FROM users u WHERE u.username = $1",[username]);
    return result;
}

module.exports = {
    checkUsernameData
}