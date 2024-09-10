// backend/seed.js
require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./productModel');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/myapp';

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    return Product.deleteMany(); // Clear existing products
  })
  .then(() => {
    return Product.insertMany([
        { name: 'Laptop', price: 1000, description: 'High-performance laptop', availability: true, category: 'Laptop' },
        { name: 'Tablet', price: 500, description: 'Portable tablet', availability: false, category: 'Tablet' },
        { name: 'Smartphone', price: 800, description: 'Latest smartphone', availability: true, category: 'Mobile' },
        { name: 'iPhone 15 Pro Max', price: 1200, description: 'Latest flagship smartphone with advanced camera', availability: true, category: 'Mobile' },
        { name: 'Samsung Galaxy S24 Ultra', price: 1000, description: 'High-performance Android smartphone', availability: true, category: 'Mobile' },
        { name: 'Google Pixel 8', price: 800, description: 'Pure Android experience with excellent camera', availability: true, category: 'Mobile' },
        { name: 'OnePlus 12', price: 700, description: 'Value-for-money flagship with fast charging', availability: true, category: 'Mobile' },
        { name: 'Xiaomi 14 Pro', price: 600, description: 'Affordable flagship with powerful processor', availability: true, category: 'Mobile' },
        { name: 'iPad Pro 12.9-inch', price: 1000, description: 'High-end tablet for productivity and creativity', availability: true, category: 'Tablet' },
        { name: 'Samsung Galaxy Tab S9 Ultra', price: 800, description: 'Large-screen tablet for multitasking', availability: true, category: 'Tablet' },
        { name: 'Amazon Kindle Oasis', price: 300, description: 'E-reader with premium design', availability: true, category: 'Tablet' },
        { name: 'Lenovo Tab P11 Pro Gen 2', price: 500, description: 'Mid-range tablet with good performance', availability: true, category: 'Tablet' },
        { name: 'Huawei MatePad Pro 11', price: 600, description: 'Android tablet with powerful processor', availability: true, category: 'Tablet' },
        { name: 'MacBook Pro 16-inch M2 Pro', price: 2500, description: 'High-performance laptop for professionals', availability: true, category: 'Laptop' },
        { name: 'Dell XPS 15', price: 2000, description: 'Powerful Windows laptop with premium build', availability: true, category: 'Laptop' },
        { name: 'HP Spectre x360', price: 1500, description: '2-in-1 laptop with convertible design', availability: true, category: 'Laptop' },
        { name: 'Lenovo ThinkPad X1 Carbon Gen 11', price: 1800, description: 'Business-oriented laptop with durability', availability: true, category: 'Laptop' },
        { name: 'Acer Predator Helios 17', price: 2000, description: 'Gaming laptop with powerful graphics', availability: true, category: 'Laptop' }
    ]);
  })
  .then(() => {
    console.log('Products inserted');
    return mongoose.disconnect();
  })
  .catch(err => {
    console.error('Error:', err);
    mongoose.disconnect();
  });
