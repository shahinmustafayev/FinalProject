const pool = require('../config/db');
const categoryModel = require('../models/category/Category');
const { CATEGORY_FOUND_SUCCESSFULLY,DATA_SUCCESSFULLY, DATA_EDIT_SUCCESSFULLY, DATA_UPDATE_SUCCESSFULLY, DATA_DELETE_SUCCESSFULLY } = require('../utils/messages/messages');
const { SuccessResult } = require('../utils/results');

const getCategoryData = async () => {
    const result = await pool.query("SELECT * FROM category where isdeleted = 0");
    const mappedData = categoryModel.mapAll(result.rows);
    return new SuccessResult(CATEGORY_FOUND_SUCCESSFULLY, mappedData);
};

const addCategory = async category => {
    console.log(category);
    const result = await pool.query('insert into category(name) values ($1) returning *', [category.name]);
    return new SuccessResult(DATA_SUCCESSFULLY,result.rows[0]);
}

const getOneCategory = async id => {
    const result = await pool.query('select * from category c where c.id = $1', [id]);
    const mappedData = categoryModel.mapOne(result.rows[0]);
    return new SuccessResult(DATA_EDIT_SUCCESSFULLY, mappedData);
}

const updateCategory = async category => {
    const result = await pool.query('update category set name = $1 where id = $2 returning *',[category.name,category.id]);
    const mappedData = categoryModel.mapOne(result.rows[0]);
    return new SuccessResult(DATA_UPDATE_SUCCESSFULLY, mappedData);
}

const deleteCategory = async id => {
    const result = await pool.query('update category set isdeleted = 1 where id = $1', [id]);
    return new SuccessResult(DATA_DELETE_SUCCESSFULLY);
}

module.exports = {
    getCategoryData,
    addCategory,
    getOneCategory,
    updateCategory,
    deleteCategory
}