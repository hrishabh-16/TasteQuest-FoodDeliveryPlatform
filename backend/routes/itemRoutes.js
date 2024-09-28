const express = require('express');
const { getAllItems, getCategories } = require('../controllers/itemController');

const router = express.Router();

router.get('/items', getAllItems);
router.get('/categories', getCategories);

module.exports = router;