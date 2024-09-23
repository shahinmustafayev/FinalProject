const express = require('express');
const productDetailsServiceApi = require('../services/api/productDetailsApi');
const router = express.Router();

router.get('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await productDetailsServiceApi.getProductDetailsApiData(id);
        res.json(result);
    } catch (error) {
        next(error);
    }
});

module.exports = router;