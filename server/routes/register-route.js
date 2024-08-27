const express = require('express');
const router = express.Router();
const registerController = require('../controllers/register-controller');

router.get('/', registerController.getRegisterView);
router.post('/user', registerController.registerUser);

module.exports = router;