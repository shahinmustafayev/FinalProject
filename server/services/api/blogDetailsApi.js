const pool = require('../../config/db');
const blogModel = require('../../models/blog/Blog');
const { BLOG_FOUND_SUCCESSFULLY } = require('../../utils/messages/messages');
const { SuccessResult } = require('../../utils/results');

const getBlogDetailsApiData = async id => {
    const result = await pool.query("SELECT * FROM blog b where b.id = $1" , [id]);
    const mappedData = blogModel.mapOne(result.rows[0]);
    return new SuccessResult(BLOG_FOUND_SUCCESSFULLY,mappedData);
}

module.exports = {
    getBlogDetailsApiData
}