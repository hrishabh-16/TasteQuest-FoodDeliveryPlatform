const Item = require('../models/Item');

exports.searchItems = async (req, res, next) => {
  try {
    const { query } = req.query;
    const items = await Item.find({ $text: { $search: query } });
    res.json(items);
  } catch (error) {
    next(error);
  }
};