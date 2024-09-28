const express = require('express');
const router = express.Router();
const checkoutController = require('../controllers/checkoutController');
const auth = require('../middleware/auth');

router.post('/', auth, checkoutController.processCheckout);

module.exports = router;