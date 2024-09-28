const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const auth = require('../middleware/auth');

router.post('/', auth, orderController.placeOrder);
router.get('/', auth, orderController.getOrderHistory);
router.get('/:id', auth, orderController.getOrderDetails);

module.exports = router;