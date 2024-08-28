const loginService = require('../services/login-service');
const session = require('express-session');
const { USER_NOT_FOUND, INVALID_PASSWORD, INVALID_USERNAME } = require('../utils/messages/messages');
const bcrypt = require('bcrypt');

const getLoginView = async (req,res) => {
    res.render('login/index');
}

const loginUser = async (req, res) => {
    let { username, password } = req.body;
    // Username check 
    if (!username || typeof username !== 'string' || username.length < 3 || username.length > 30) {
        return res.render('login/index', { error: INVALID_USERNAME });
    }
    // Password check
    if (!password || typeof password !== 'string') {
        return res.render('login/index', { error: INVALID_PASSWORD });
    }
    const checkUser = await loginService.checkUserData(username);
    if (!checkUser || checkUser.length === 0) {
        return res.render('login/index', { error: USER_NOT_FOUND });
    }
    const user = checkUser[0];  // Get the first user from the result
    const match = await bcrypt.compare(password, user.password);  // Compare the provided password with the stored hash
    if (!match) {
        return res.render('login/index', { error: INVALID_PASSWORD });
    }
    res.redirect('/dashboard');
};

module.exports = {
    getLoginView,
    loginUser
}