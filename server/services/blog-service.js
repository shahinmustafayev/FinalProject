const pool = require('../config/db');
const blogModel = require('../models/blog/Blog');
const { BLOG_FOUND_SUCCESSFULLY, BLOG_ADDED_SUCCESSFULLY, DATA_UPDATE_SUCCESSFULLY, DATA_DELETE_SUCCESSFULLY } = require('../utils/messages/messages');
const { SuccessResult,ErrorResult } = require('../utils/results');

const getBlogData = async () => {
    const result = await pool.query("Select * from blog where isdeleted = 0");
    const mappedData = blogModel.mapAll(result.rows);
    return new SuccessResult(BLOG_FOUND_SUCCESSFULLY, mappedData);
}

const addBlog = async (blog) => {
    const result = await pool.query("INSERT INTO blog(title,description,author,date,image,isdeleted) VALUES($1,$2,$3,$4,$5,$6) RETURNING *", [
        blog.title,
        blog.description,
        blog.author,
        blog.date,
        blog.image,
        blog.isdeleted
    ]);
    return new SuccessResult(BLOG_ADDED_SUCCESSFULLY, result);
}

const getOneBlog = async id => {
    const result = await pool.query('Select * from blog where id = $1', [id]);
    const mappedData = blogModel.mapOne(result.rows[0]);
    return new SuccessResult(BLOG_FOUND_SUCCESSFULLY,mappedData);
}

const updateBlog = async blog => {
    if (!blog) {
        console.error('Blog object is undefined or null');
        return new ErrorResult('Blog data is missing');
    }
    const result = await pool.query("Update blog set title = $1,description = $2,author = $3, date = $4, image = $5, isdeleted = $6 where id = $7 returning *", [
        blog.title,
        blog.description,
        blog.author,
        blog.date,
        blog.image,
        blog.isdeleted,
        blog.id
    ]);
    const mappedData = blogModel.mapOne(result.rows[0]);
    return new SuccessResult(DATA_UPDATE_SUCCESSFULLY,mappedData);
}

const deleteBlog = async id => {
    const result = await pool.query('update blog set isdeleted = 1 where id = $1', [id]);
    return new SuccessResult(DATA_DELETE_SUCCESSFULLY);
}

module.exports = {
    getBlogData,
    addBlog,
    getOneBlog,
    updateBlog,
    deleteBlog
}