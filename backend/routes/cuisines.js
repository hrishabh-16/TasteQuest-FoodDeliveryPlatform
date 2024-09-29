const express = require('express');
const router = express.Router();
const Cuisine = require('../models/Cuisine');

router.get('/', async (req, res) => {
  try {
    const cuisines = await Cuisine.find();
    res.json(cuisines);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;