const pool = require('../../config/db');
const { DATA_SUCCESSFULLY } = require('../../utils/messages/messages');

const addContact = async (contact) => {
    const createdAt = new Date();
    const updatedAt = new Date();
    const isDeleted = 0;

    const result = await pool.query(
        'INSERT INTO contact(name, email, subject, message, isdeleted, created_at, updated_at) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *', [
            contact.name,
            contact.email,
            contact.subject,
            contact.message,
            isDeleted,
            createdAt,
            updatedAt
        ]
    );

    console.log(result.rows[0]);
    return {
        success: true,
        message: DATA_SUCCESSFULLY,
        data: result.rows[0]
    };
};

module.exports = {
    addContact
}