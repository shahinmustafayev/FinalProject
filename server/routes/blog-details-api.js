const express = require('express');
const blogDetailsServiceApi = require('../services/api/blogDetailsApi');
const router = express.Router();

router.get('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await blogDetailsServiceApi.getBlogDetailsApiData(id);
        res.json(result);
    } catch (error) {
        next(error);
    }
});

module.exports = router;