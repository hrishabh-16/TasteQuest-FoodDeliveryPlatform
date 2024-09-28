const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

router.get('/', itemController.getAllItems);
router.get('/:id', itemController.getItem);
router.get('/category/:categoryId', itemController.getItemsByCategory);

module.exports = router;