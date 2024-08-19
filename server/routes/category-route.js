const express = require('express');
const categoryController = require('../controllers/category-controller');
const router = express.Router();

router.get('/', categoryController.getCategoryView);
router.get('/add', categoryController.addCategoryView);
router.post('/add', categoryController.addCategoryData);

module.exports = router;