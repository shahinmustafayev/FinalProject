const express = require('express');
const contactController = require('../controllers/contact-controller');
const router = express.Router();

router.get('/' , contactController.getContactView);
router.get('/delete/:id', contactController.deleteContact);

module.exports = router;