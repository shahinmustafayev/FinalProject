const pool = require('../../config/db');
const productModel = require('../../models/product/Product');
const { PRODUCT_FOUND_SUCCESSFULLY } = require('../../utils/messages/messages');
const { SuccessResult } = require('../../utils/results');

    const getProductDetailsApiData = async id => {
    const result = await pool.query("SELECT p.*, c.name AS category_name, c.id AS categoryid FROM product p LEFT JOIN category c ON p.categoryid = c.id WHERE p.id = $1 AND p.isdeleted = 0", [id]);
    const mappedData = productModel.mapOne(result.rows[0]);
    return new SuccessResult(PRODUCT_FOUND_SUCCESSFULLY, mappedData);
}

module.exports = {
    getProductDetailsApiData
}