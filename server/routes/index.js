const defaultRoute = require('./default-route');
const categoryRoute = require('./category-route');
const productRoute = require('./product-route');
const blogRoute = require('./blog-route');
const loginRoute = require('./login-route');
const registerRoute = require('./register-route');
const adminDashboard = require('./admin-route');
const logoutRoute = require('./logout-route');
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

module.exports = router;