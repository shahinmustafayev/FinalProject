const loginService = require('../services/login-service');

const getLoginView = async (req,res) => {
    res.render('login/index');
}

const loginUser = async (req,res) => {
    let { username } = req.body;
    if (!username || typeof username !== 'string' || username.length < 3 || username.length > 30) {
        return res.render('login/index', { error: INVALID_USERNAME });
    }
    
    const checkUser = await loginService.checkUsernameData(username);
    res.redirect('/');
}

module.exports = {
    getLoginView,
    loginUser
}