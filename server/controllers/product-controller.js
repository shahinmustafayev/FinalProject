const ProductAddDTO = require('../models/product/product-add-dto');
const ProductEditDTO = require('../models/product/product-edit-dto');
const productService = require('../services/product-service');

const getProductView = async (req, res) => {
    const result = await productService.getProductData();
    if (result.success) {
        const data = Array.isArray(result.data) ? result.data : [];
        res.render('product/index', { data: data });
    } else {
        res.render('product/index', { data: [] });
    }
};

const addProductView = async (req, res) => {
    const result = await productService.getAllCategoriesData();
    res.render('product/add', { data: result.data });
}


const addProductDTO = async (req,res) => {
    const productAddDTO = new ProductAddDTO(req.body);
    const result = await productService.addProduct(productAddDTO);
    if(result.success)
        res.redirect('/product');
}

module.exports = {
    getProductView,
    addProductView,
    addProductDTO
}