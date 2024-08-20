const express = require('express');
const categoryController = require('../controllers/category-controller');
const router = express.Router();

router.get('/', categoryController.getCategoryView);
router.get('/add', categoryController.addCategoryView);
router.get('/edit/:id', categoryController.getCategoryEditView);
router.post('/add', categoryController.addCategoryData);
router.post('/update', categoryController.updateCategory);
router.get('/delete/:id', categoryController.deleteCategory);

module.exports = router;