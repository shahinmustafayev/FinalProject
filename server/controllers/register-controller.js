const { REGISTERED_SUCCESSFULLY, INVALID_USERNAME, INVALID_PASSWORD, DUBLICATE_USERNAME, USERNAME_ALREADY_TAKEN } = require("../utils/messages/messages");
const { SuccessResult, ErrorResult } = require("../utils/results");
const userDTO = require('../models/user/user-dto');
const registerService = require('../services/register-service');
const bcrypt = require('bcrypt');


const getRegisterView = async (req,res) => {
    res.render('register/index');
}

const checkDuplicateUsername = async (username) => {
    const isDuplicate = await registerService.duplicateUsername(username);
    return isDuplicate;  // return true if duplicate, false otherwise
};

const registerUser = async (req, res) => {
        let { username, password, isactive, isdeleted } = req.body;
        if (!username || typeof username !== 'string' || username.length < 3 || username.length > 30) {
            return res.render('register/index', { error: INVALID_USERNAME });
        }
        const isDuplicate = await checkDuplicateUsername(username);
        if (isDuplicate) {
            return res.render('register/index', { error: USERNAME_ALREADY_TAKEN });
        }
        if (!password || typeof password !== 'string') {
            return res.render('register/index', { error: INVALID_PASSWORD });
        }
        password = await bcrypt.hash(password, 10);
        const userAddDTO = new userDTO({ username, password, isactive, isdeleted });
        const result = await registerService.addRegisterData(userAddDTO);
        res.redirect('/login?success=Registration+successful!');
};

module.exports = {
    getRegisterView,
    registerUser
}