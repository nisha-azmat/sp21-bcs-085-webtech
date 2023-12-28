const express = require('express');
const mongoose = require('mongoose');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');

const app = express();

// MongoDB connection
mongoose.connect('mongodb+srv://nishaazmat38:mongopass$1@users.0uxcyr6.mongodb.net/?retryWrites=true&w=majority');

// EJS setup
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', 'layouts/layout');

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

// MongoDB Product model
const Product = mongoose.model('Product', {
  name: String,
  description: String,
  price: Number,
});

// Validation middleware for non-negative prices
function validateNonNegativePrice(req, res, next) {
  const { price } = req.body;

  // Check if the price is a valid number and non-negative
  if (!price || isNaN(price) || price < 0) {
    return res.render('products/new', { title: 'New Product', errorMessage: 'Please enter a valid non-negative price' });
  }

  // If validation passes, call the next middleware or route handler
  next();
}

// Validation middleware for creating a new product
async function validateNewProduct(req, res, next) {
  const { name, description, price } = req.body;

  // Check if the price is a valid number and non-negative
  if (!price || isNaN(price) || price < 0) {
    return res.render('products/new', { title: 'New Product', errorMessage: 'Please enter a valid non-negative price' });
  }

  // Check if a product with the same name or description already exists
  const existingProduct = await Product.findOne({ $or: [{ name }, { description }] });
  if (existingProduct) {
    return res.render('products/new', { title: 'New Product', errorMessage: 'Product with the same name or description already exists', name, description, price });
  }

  // If validation passes, call the next middleware or route handler
  next();
}

// Validation middleware for updating a product
async function validateUpdateProduct(req, res, next) {
  const { price } = req.body;

  // Check if the price is a valid number and non-negative
  if (!price || isNaN(price) || price < 0) {
    return res.render('products/edit', { title: 'Edit Product', errorMessage: 'Please enter a valid non-negative price', product: req.body });
  }

  // Additional validation logic can be added here

  // If validation passes, call the next middleware or route handler
  next();
}

// Routes

// Home page - List all products
app.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.render('products/index', { title: 'Products', products });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Create a new product form
app.get('/products/new', (req, res) => {
  res.render('products/new', { title: 'New Product' });
});

// Create a new product with validation middleware
app.post('/products', validateNonNegativePrice, validateNewProduct, async (req, res) => {
  const { name, description, price } = req.body;

  // Validation middleware
  if (!name || !description || !price) {
    return res.render('products/new', { title: 'New Product', errorMessage: 'All fields are required' });
  }

  try {
    const newProduct = new Product({ name, description, price });
    await newProduct.save();
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Update product form
app.get('/products/edit/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.render('products/edit', { title: 'Edit Product', product });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


// Update product with validation middleware
app.post('/products/edit/:id', validateUpdateProduct, async (req, res) => {
  try {
    await Product.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price
    });
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Delete product
app.post('/products/delete/:id', async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
