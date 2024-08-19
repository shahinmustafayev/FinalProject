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
    console.log(req.body);
}

module.exports = {
    getCategoryView,
    addCategoryView,
    addCategoryData
}