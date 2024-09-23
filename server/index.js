const express = require("express");
const dotenv = require("dotenv");
const path = require('path');
const routerMvc = require('../server/routes');
const cors = require('cors');
const pool = require('./config/db');

dotenv.config();

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'/views'));

const PORT = process.env.PORT || 3004;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.get('/productData', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM product p where p.isdeleted = 0');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

app.get('/categoryData', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM category c where c.isdeleted = 0');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

app.use(express.static('public'));
app.use(express.static('static'));

app.use('/' , routerMvc);

app.listen(PORT, () => console.log(`Server heard on ${PORT}`));