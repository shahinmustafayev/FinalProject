const pool = require('../config/db');
const { REGISTERED_SUCCESSFULLY } = require('../utils/messages/messages');
const { SuccessResult } = require('../utils/results');

const addRegisterData = async (user) => {
    const result = await pool.query("Insert Into users(username,password,isactive,isdeleted) values($1,$2,$3,$4)",[
        user.username,
        user.password,
        user.isactive,
        user.isdeleted
    ]);
    return new SuccessResult(REGISTERED_SUCCESSFULLY, result);
}

const duplicateUsername = async (username) => {
    const result = await pool.query('SELECT COUNT(*) FROM users WHERE username = $1', [username]);
    return result.rows[0].count > 0;
}

module.exports = {
    addRegisterData,
    duplicateUsername
}