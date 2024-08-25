const BlogAddDTO = require('../models/blog/blog-add-dto');
const BlogEditDTO = require('../models/blog/blog-edit-dto');
const blogService = require('../services/blog-service');
const multer = require('multer');
const path = require('path');

const getBlogView = async (req,res) => {
    const result = await blogService.getBlogData();
    if(result.success){
        const data = Array.isArray(result.data) ? result.data : [];
        res.render('blog/index', { data: data });
    }else{
        res.render('blog/index', { data: [] });
    }
};

const addBlogView = async (req,res) => {
    res.render('blog/add');
}

// Set up storage engine
const storage = multer.diskStorage({
    destination: './uploads/blog', // folder to save uploaded files
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

const addBlogDTO = async (req,res) => {
    upload(req,res, async (err) => {
        if (err) {
            return res.status(400).send({ message: err });
        } else {
            if (req.file == undefined) {
                return res.status(400).send({ message: 'No file selected!' });
            } else {
                const blogAddDTO = new BlogAddDTO({
                    ...req.body,
                    image: req.file.filename // set the file path
                });
                const result = await blogService.addBlog(blogAddDTO);
                if (result.success) {
                    res.redirect('/blog');
                } else {
                    res.status(500).send({ message: 'Failed to add blog.' });
                }
            }
        }
    });
}

const getBlogEditView = async (req,res) => {
    const id = req.params.id;
    const result = await blogService.getOneBlog(id);
    if(result.success)
        res.render('blog/edit', {data : result.data });
}

const updateBlogDTO = async (req, res) => {
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
            const blogUpdateDTO = new BlogEditDTO(updateData);
            const result = await blogService.updateBlog(blogUpdateDTO);
            if (result.success) {
                res.redirect('/blog');
            } else {
                res.status(500).send({ message: 'Failed to update blog.' });
            }
        }
    });
};

const deleteBlog = async (req,res) => {
    const id = req.params.id;
    const result = await blogService.deleteBlog(id);
    if(result.success)
        res.redirect('/blog');
}

module.exports = {
    getBlogView,
    addBlogView,
    addBlogDTO,
    getBlogEditView,
    updateBlogDTO,
    deleteBlog
}