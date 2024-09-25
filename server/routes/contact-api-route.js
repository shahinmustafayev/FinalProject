const express = require('express');
const contactServiceApi = require('../services/api/contactApi');
const router = express.Router(); 

router.post('/contactForm', async (req, res) => {
    try {
        const contact = req.body;
        await contactServiceApi.addContact(contact);
        res.redirect('/');
    } catch (error) {
        console.error("Error saving contact information:", error); // Log error details
        res.status(500).json({ message: 'Error saving contact information', error });
    }
});

module.exports = router;