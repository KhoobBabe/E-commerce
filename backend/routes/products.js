// backend/routes/products.js
const express = require('express');
const router = express.Router();
const Product = require('../productModel');
const mongoose = require('mongoose');

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a product by ID
router.get('/:id', async (req, res) => {
  try {
    const productId = req.params.id;

    // Check if the ID is valid before querying MongoDB
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ message: 'Invalid product ID' });
    }

    // Find the product by MongoDB _id
    const product = await Product.findById(productId);  // Use findById() for MongoDB's _id
    if (!product) return res.status(404).json({ message: 'Product not found' });

    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new product
router.post('/', async (req, res) => {
  const product = new Product({
    id: req.body.id,
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    availability: req.body.availability,
    category: req.body.category
  });
  
  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a product
router.put('/:id', async (req, res) => {
  try {
    const product = await Product.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    );
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a product
router.delete('/:id', async (req, res) => {
  try {
    const result = await Product.deleteOne({ id: req.params.id });
    if (result.deletedCount === 0) return res.status(404).json({ message: 'Product not found' });
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
