const express = require('express');
const productController = require('../controllers/product-controller');
const router = express.Router();

router.get('/' , productController.getProductView);
router.get('/add', productController.addProductView);
// router.get('/edit/:id', categoryController.getCategoryEditView);
router.post('/add', productController.addProductDTO);
// router.post('/update', categoryController.updateCategory);
// router.get('/delete/:id', categoryController.deleteCategory);

module.exports = router;