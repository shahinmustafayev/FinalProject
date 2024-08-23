const pool = require('../config/db');
const productModel = require('../models/product/Product');
const categoryModel = require('../models/category/Category');
const { PRODUCT_FOUND_SUCCESSFULLY, PRODUCT_ADDED_SUCCESSFULLY, CATEGORY_FOUND_SUCCESSFULLY, DATA_UPDATE_SUCCESSFULLY, DATA_DELETE_SUCCESSFULLY } = require('../utils/messages/messages');
const { SuccessResult,ErrorResult } = require('../utils/results');

const getProductData = async () => {
    const query = `
        SELECT p.*, c.name as category_name 
        FROM product p 
        LEFT JOIN category c ON p.categoryid = c.id 
        WHERE p.isdeleted = 0
    `;
    const result = await pool.query(query);
    const mappedData = productModel.mapAll(result.rows);
    return new SuccessResult(PRODUCT_FOUND_SUCCESSFULLY, mappedData);
};


const getAllCategoriesData = async () => {
    const allCategory = await pool.query("select * from category c where c.isdeleted = 0");
    const mappedData = categoryModel.mapAll(allCategory.rows);
    return new SuccessResult(CATEGORY_FOUND_SUCCESSFULLY, mappedData);
}

const addProduct = async (product) => {
    const result = await pool.query(
        'INSERT INTO product(name, description, image, model, price, old_price, categoryid, isdeleted, date) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *', [
            product.name,
            product.description,
            product.image,
            product.model,
            product.price,
            product.old_price,
            product.categoryid,
            product.isdeleted,
            product.date
        ]
    );
    return new SuccessResult(PRODUCT_ADDED_SUCCESSFULLY, result);
};

const getOneProduct = async id => {
    const result = await pool.query("SELECT p.*, c.name AS category_name, c.id AS categoryid FROM product p LEFT JOIN category c ON p.categoryid = c.id WHERE p.id = $1 AND p.isdeleted = 0", [id]);
    // console.log(result.rows[0]);
    const mappedData = productModel.mapOne(result.rows[0]);
    return new SuccessResult(PRODUCT_FOUND_SUCCESSFULLY, mappedData);
}

const updateProduct = async product => {
    if (!product) {
        console.error('Product object is undefined or null');
        return new ErrorResult('Product data is missing');
    }
    const result = await pool.query("update product set name = $1,description = $2,categoryid = $3,image = $4,isdeleted = $5,model = $6,price = $7,old_price = $8,date = $9 where id = $10 returning *", [
        product.name,
        product.description,
        product.categoryid,
        product.image,
        product.isdeleted,
        product.model,
        product.price,
        product.old_price,
        product.date,
        product.id
    ]);
    const mappedData = productModel.mapOne(result.rows[0]);
    return new SuccessResult(DATA_UPDATE_SUCCESSFULLY, mappedData);
}

const deleteProduct = async id => {
    const result = await pool.query('update product set isdeleted = 1 where id = $1', [id]);
    return new SuccessResult(DATA_DELETE_SUCCESSFULLY);
}

module.exports = {
    getProductData,
    addProduct,
    getAllCategoriesData,
    getOneProduct,
    updateProduct,
    deleteProduct
}