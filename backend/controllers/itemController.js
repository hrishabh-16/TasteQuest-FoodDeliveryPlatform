const Item = require('../models/Item');

exports.getAllItems = async (req, res, next) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    next(error);
  }
};

exports.getItem = async (req, res, next) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(item);
  } catch (error) {
    next(error);
  }
};

exports.getItemsByCategory = async (req, res, next) => {
  try {
    const items = await Item.find({ category: req.params.categoryId });
    res.json(items);
  } catch (error) {
    next(error);
  }
};