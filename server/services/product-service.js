const pool = require('../config/db');
const productModel = require('../models/product/Product');
const categoryModel = require('../models/category/Category');
const { PRODUCT_FOUND_SUCCESSFULLY, PRODUCT_ADDED_SUCCESSFULLY, CATEGORY_FOUND_SUCCESSFULLY } = require('../utils/messages/messages');
const { SuccessResult } = require('../utils/results');

const getProductData = async () => {
    const result = await pool.query("SELECT * FROM product where isdeleted = 0");
    const mappedData = productModel.mapAll(result.rows);
    return new SuccessResult(PRODUCT_FOUND_SUCCESSFULLY, mappedData);
};

const getAllCategoriesData = async () => {
    const allCategory = await pool.query("select * from category c where c.isdeleted = 0");
    const mappedData = categoryModel.mapAll(allCategory.rows);
    return new SuccessResult(CATEGORY_FOUND_SUCCESSFULLY, mappedData);
}

const addProduct = async product => {
    const result = await pool.query('insert into product(name,description,image,model,price,old_price,categoryid,isdeleted,date) values($1,$2.$3,$4,$5,$6,$7,$8,$9) returning *',[
        product.name,
        product.description,
        product.image,
        product.model,
        product.price,
        product.old_price,
        product.categoryid,
        product.isdeleted,
        product.date
    ]);
    return new SuccessResult(PRODUCT_ADDED_SUCCESSFULLY,result);

    // Add Product Qaldi tamamlanmagi
}

module.exports = {
    getProductData,
    addProduct,
    getAllCategoriesData
}