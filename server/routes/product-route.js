const express = require('express');
const productController = require('../controllers/product-controller');
const router = express.Router();

router.get('/' , productController.getProductView);
router.get('/add', productController.addProductView);
router.get('/edit/:id', productController.getProductEditView);
router.post('/add', productController.addProductDTO);
router.post('/update', productController.updateProductDTO);
router.get('/delete/:id', productController.deleteProduct);

module.exports = router;