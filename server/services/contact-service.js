const pool = require('../config/db');
const contactModel = require('../models/contact/Contact');
const { DATA_SUCCESSFULLY, DATA_DELETE_SUCCESSFULLY } = require('../utils/messages/messages');
const { SuccessResult } = require('../utils/results');

const getContactData = async () => {
    const result = await pool.query('SELECT * FROM contact c where c.isdeleted = 0');
    const mappedData = contactModel.mapAll(result.rows);
    return new SuccessResult(DATA_SUCCESSFULLY, mappedData);
}

const deleteContactData = async (id) => {
    const result = await pool.query('update contact set isdeleted = 1 where id = $1', [id]);
    return new SuccessResult(DATA_DELETE_SUCCESSFULLY);
}

module.exports = {
    getContactData,
    deleteContactData
}