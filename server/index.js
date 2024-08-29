const express = require("express");
const dotenv = require("dotenv");
const path = require('path');
const routerMvc = require('../server/routes');
const session = require('express-session');

dotenv.config();

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'/views'));

const PORT = process.env.PORT || 3004;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/uploads', express.static('uploads'));
app.use(express.static('public'));
app.use(express.static('static'));

app.use('/' , routerMvc);

app.use(session({
    secret: 'secret_key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }  // Set secure: true if using HTTPS
}));

app.listen(PORT, () => console.log(`Server heard on ${PORT}`));