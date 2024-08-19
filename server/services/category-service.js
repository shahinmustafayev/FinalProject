const pool = require('../config/db');
const categoryModel = require('../models/Category');
const { CATEGORY_FOUND_SUCCESSFULLY } = require('../utils/messages/messages');
const { SuccessResult } = require('../utils/results');

const getCategoryData = async () => {
    const result = await pool.query("SELECT * FROM category");
    const mappedData = categoryModel.mapAll(result.rows); // Ensure this returns an array
    return new SuccessResult(CATEGORY_FOUND_SUCCESSFULLY, mappedData);
};

module.exports = {
    getCategoryData
}