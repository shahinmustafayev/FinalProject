const express = require('express');
const blogController = require('../controllers/blog-controller');
const router = express.Router();

router.get('/' , blogController.getBlogView);
router.get('/add', blogController.addBlogView);
router.get('/edit/:id', blogController.getBlogEditView);
router.post('/add', blogController.addBlogDTO);
router.post('/update', blogController.updateBlogDTO);
router.get('/delete/:id', blogController.deleteBlog);

module.exports = router;