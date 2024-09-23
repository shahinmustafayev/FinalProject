const pool = require('../../config/db');
const categoryModel = require('../../models/category/Category');
const { CATEGORY_FOUND_SUCCESSFULLY } = require('../../utils/messages/messages');
const { SuccessResult } = require('../../utils/results');

const getCategoryData = async () => {
    const result = await pool.query("SELECT * FROM category where isdeleted = 0");
    const mappedData = categoryModel.mapAll(result.rows);
    return new SuccessResult(CATEGORY_FOUND_SUCCESSFULLY, mappedData);
};

module.exports = {
    getCategoryData
}