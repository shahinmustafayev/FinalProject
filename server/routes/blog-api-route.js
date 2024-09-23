const express = require('express');
const blogServiceApi = require('../services/api/blogApi');
const router = express.Router();

router.get('/', blogServiceApi.getBlogApiData);

module.exports = router;