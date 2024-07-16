const express = require('express');
const router = express.Router();
const providerController = require('../controllers/providerController');
//const authUser = require('../middleware/authenticateToken')

router.post('/create', providerController.createProvider)
router.get('/allproviders', providerController.getAllProviders);

module.exports = router;