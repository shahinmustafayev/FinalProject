const CategoryAddDTO = require('../models/category/category-add-dto');
const CategoryUpdateDTO = require('../models/category/category-edit-dto');
const categoryService = require('../services/category-service');

const getCategoryView = async (req, res) => {
    const result = await categoryService.getCategoryData();
    if (result.success) {
        const data = Array.isArray(result.data) ? result.data : [];
        res.render('category/index', { data: data });
    } else {
        res.render('category/index', { data: [] });
    }
};

const addCategoryView = async (req,res) => {
    res.render('category/add');
}

const addCategoryData = async (req,res) => {
    const categoryAddDTO = new CategoryAddDTO(req.body);
    const result = await categoryService.addCategory(categoryAddDTO);
    if(result.success)
        res.redirect('/categories');
}

const getCategoryEditView = async (req,res) => {
    const id = req.params.id;
    const result = await categoryService.getOneCategory(id);
    if(result.success)
        res.render('category/edit', {data: result.data});
}

const updateCategory = async (req,res) => {
    const categoryUpdateDto = new CategoryUpdateDTO(req.body);
    const result = await categoryService.updateCategory(categoryUpdateDto);
    if(result.success)
        res.redirect('/categories');
}

const deleteCategory = async (req,res) => {
    const id = req.params.id;
    const result = await categoryService.deleteCategory(id);
    if(result.success)
        res.redirect('/categories');
}

module.exports = {
    getCategoryView,
    addCategoryView,
    addCategoryData,
    getCategoryEditView,
    updateCategory,
    deleteCategory
}