// backend/models/Item.js
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true }, // Reference to Category
  cuisine: { type: mongoose.Schema.Types.ObjectId, ref: 'Cuisine', required: true },  // Reference to Cuisine
  image: { type: String }, // URL or path to the image
  inStock: { type: Boolean, default: true },
  quantity: { type: Number, default: 0 }
}, { timestamps: true });

// Indexing 'name' and 'description' for text search
itemSchema.index({ name: 'text', description: 'text' });

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
