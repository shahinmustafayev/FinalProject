const pool = require('../../config/db');
const blogModel = require('../../models/blog/Blog');
const { BLOG_FOUND_SUCCESSFULLY } = require('../../utils/messages/messages');
const { SuccessResult } = require('../../utils/results');

const getBlogApiData = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM blog WHERE isdeleted = 0");
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'No blog data found' });
        }
        return res.status(200).json(new SuccessResult(BLOG_FOUND_SUCCESSFULLY, result.rows));
    } catch (error) {
        console.error('Error fetching blog data:', error);
        return res.status(500).json({ message: 'Error fetching blog data' });
    }
};

module.exports = {
    getBlogApiData
}