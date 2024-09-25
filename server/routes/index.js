const defaultRoute = require('./default-route');
const categoryRoute = require('./category-route');
const productRoute = require('./product-route');
const blogRoute = require('./blog-route');
const loginRoute = require('./login-route');
const registerRoute = require('./register-route');
const adminDashboard = require('./admin-route');
const logoutRoute = require('./logout-route');
const productApiRoute = require('./product-api-route');
const categoryApiRoute = require('./category-api-route');
const productDetailsApiRoute = require('./product-details-api');
const blogApiRoute = require('./blog-api-route');
const blogDetailsApiRoute = require('./blog-details-api');
const contactRoute = require('./contact-route');
const contactApiRoute = require('./contact-api-route');
const express = require('express');
const router = express.Router();

router.use('/' , adminDashboard);
router.use('/dashboard', defaultRoute);
router.use('/categories' , categoryRoute);
router.use('/product', productRoute);
router.use('/blog', blogRoute); 
router.use('/login' , loginRoute);
router.use('/logout', logoutRoute);
router.use('/register' , registerRoute);
router.use('/productData' , productApiRoute); 
router.use('/categoryData' , categoryApiRoute);
router.use('/product', productDetailsApiRoute);
router.use('/blogData' , blogApiRoute);
router.use('/blog' , blogDetailsApiRoute);
router.use('/contact' , contactRoute);
router.use('/' , contactApiRoute);

module.exports = router;