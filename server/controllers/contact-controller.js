const contactService = require('../services/contact-service');
const path = require('path'); 

const getContactView = async (req, res) => {
    const result = await contactService.getContactData();
    if (result.success) {
        const data = Array.isArray(result.data) ? result.data : [];
        res.render('contact/index', { data: data });
    } else {
        res.render('contact/index', { data: [] });
    }
};

const deleteContact = async (req,res) => {
    const id = req.params.id;
    const result = await contactService.deleteContactData(id);
    if(result.success)
        res.redirect('/contact')
}

module.exports = {
    getContactView,
    deleteContact
}