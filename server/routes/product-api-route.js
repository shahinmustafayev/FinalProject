const express = require('express');
const productServiceApi = require('../services/api/productApi');
const router = express.Router();

router.get('/', productServiceApi.getProductApiData);

module.exports = router;