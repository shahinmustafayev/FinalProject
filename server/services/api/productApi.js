const pool = require('../../config/db');
const productModel = require('../../models/product/Product');
const { PRODUCT_FOUND_SUCCESSFULLY } = require('../../utils/messages/messages');
const { SuccessResult } = require('../../utils/results');

const getProductApiData = async () => {
    const query = `
        SELECT p.*, c.name as category_name 
        FROM product p 
        LEFT JOIN category c ON p.categoryid = c.id 
        WHERE p.isdeleted = 0
    `;
    const result = await pool.query(query);
    const mappedData = productModel.mapAll(result.rows);
    return new SuccessResult(PRODUCT_FOUND_SUCCESSFULLY, mappedData);
}

module.exports = {
    getProductApiData
}