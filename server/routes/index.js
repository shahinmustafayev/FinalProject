const defaultRoute = require('./default-route');
const categoryRoute = require('./category-route');
const productRoute = require('./product-route');
const blogRoute = require('./blog-route');
const express = require('express');
const router = express.Router();

router.use('/', defaultRoute);
router.use('/categories' , categoryRoute);
router.use('/product', productRoute);
router.use('/blog', blogRoute);

module.exports = router;