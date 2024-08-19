const defaultRoute = require('./default-route');
const categoryRoute = require('./category-route');
const express = require('express');
const router = express.Router();

router.use('/', defaultRoute);
router.use('/categories' , categoryRoute);

module.exports = router;