// backend/models/Item.js nnn
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  category: { type: String, required: true }, // Category as a simple string
  cuisine: { type: String, required: true },  // Cuisine as a simple string
  image: { type: String }, // URL or path to the image
  inStock: { type: Boolean, default: true },
  quantity: { type: Number, default: 0 },
  veg: { type: Boolean, default: false }, // Flag to indicate if the item is vegetarian
  nonVeg: { type: Boolean, default: false }, // Flag to indicate if the item is non-vegetarian
  avgRating: { type: Number, default: 0, min: 0, max: 5 } // Average rating between 0 and 5
}, { timestamps: true });

// Indexing 'name' and 'description' for text search
itemSchema.index({ name: 'text', description: 'text' });

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
