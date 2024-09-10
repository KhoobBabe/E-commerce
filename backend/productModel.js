// backend/productModel.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  availability: Boolean,
  category: String
});

module.exports = mongoose.model('Product', productSchema);
