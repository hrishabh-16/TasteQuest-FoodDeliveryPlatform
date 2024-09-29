
// backend/models/Cuisine.js
const mongoose = require('mongoose');

const cuisineSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  image: { type: String, required: true }
}, { timestamps: true });

const Cuisine = mongoose.model('Cuisine', cuisineSchema);

module.exports = Cuisine;

// const mongoose = require('mongoose');

// const cuisineSchema = new mongoose.Schema({
//   name: { type: String, required: true, unique: true },
//   description: { type: String }
// }, { timestamps: true });

// const Cuisine = mongoose.model('Cuisine', cuisineSchema);

// module.exports = Cuisine;
