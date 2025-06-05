const express = require('express');
const router = express.Router();
const contactController = require('../controller/contactController');

router.post('/contacts', contactController.addContact);       
router.get('/contacts', contactController.getAllContacts);  
router.get('/contacts/:id', contactController.getContactById);  
router.put('/contacts/:id', contactController.updateContact);  
router.delete('/contacts/:id', contactController.deleteContact);  
module.exports = router;