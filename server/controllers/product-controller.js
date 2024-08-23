const ProductAddDTO = require('../models/product/product-add-dto');
const ProductEditDTO = require('../models/product/product-edit-dto');
const productService = require('../services/product-service');
const multer = require('multer');
const path = require('path');

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

// Set up storage engine
const storage = multer.diskStorage({
    destination: './uploads/', // folder to save uploaded files
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

// Initialize upload
const upload = multer({
    storage: storage,
    limits: { fileSize: 10000000 }, // limit file size to 10MB
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    }
}).single('image'); // 'image' is the name of the field in the form

// Check file type
function checkFileType(file, cb) {
    const filetypes = /jpeg|jpg|png|gif|jfif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Images Only!');
    }
}

const addProductDTO = async (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            return res.status(400).send({ message: err });
        } else {
            if (req.file == undefined) {
                return res.status(400).send({ message: 'No file selected!' });
            } else {
                const productAddDTO = new ProductAddDTO({
                    ...req.body,
                    image: req.file.filename // set the file path
                });
                const result = await productService.addProduct(productAddDTO);
                if (result.success) {
                    res.redirect('/product');
                } else {
                    res.status(500).send({ message: 'Failed to add product.' });
                }
            }
        }
    });
};

const getProductEditView = async (req,res) => {
    const id = req.params.id;
    const categories = await productService.getAllCategoriesData();
    const result = await productService.getOneProduct(id);
    if(result.success)
        res.render('product/edit', {data: result.data , categories : categories.data });
}

const updateProductDTO = async (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            return res.status(400).send({ message: err });
        } else {
            const updateData = {
                ...req.body,
            };
            if (req.file !== undefined) {
                updateData.image = req.file.filename; // Update the image if a new file is uploaded
            }
            const productUpdateDTO = new ProductEditDTO(updateData);
            const result = await productService.updateProduct(productUpdateDTO);
            if (result.success) {
                res.redirect('/product');
            } else {
                res.status(500).send({ message: 'Failed to update product.' });
            }
        }
    });
};

const deleteProduct = async (req,res) => {
    const id = req.params.id;
    const result = await productService.deleteProduct(id);
    if(result.success)
        res.redirect('/product');
}

module.exports = {
    getProductView,
    addProductView,
    addProductDTO,
    getProductEditView,
    updateProductDTO,
    deleteProduct
}