const express = require('express');
const categoryServiceApi = require('../services/api/categoryApi');
const router = express.Router();

router.get('/', categoryServiceApi.getCategoryData);

module.exports = router;