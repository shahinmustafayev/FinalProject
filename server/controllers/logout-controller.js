const session = require('express-session');
const logoutUser = (req, res) => {
    if (req.session) {
        req.session.destroy(err => {
            if (err) {
                return res.status(500).send('Could not log out. Please try again.');
            }
            res.render('login/index');
        });
    } else {
        res.render('login/index');
    }
};

module.exports = {
    logoutUser
};


// Cannot read properties of undefined (reading 'destroy')