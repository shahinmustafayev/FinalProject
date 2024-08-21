const defaultRoute = require('./default-route');
const categoryRoute = require('./category-route');
const productRoute = require('./product-route');
const express = require('express');
const router = express.Router();

router.use('/', defaultRoute);
router.use('/categories' , categoryRoute);
router.use('/product', productRoute);

module.exports = router;