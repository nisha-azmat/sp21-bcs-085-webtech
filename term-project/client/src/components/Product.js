// Product.js

import React, { useState } from 'react';

const products = [
  // Hot Coffee
  { id: 1, name: 'Espresso', category: 'Hot Coffee', image: '/images/img29.png', price: 2.99 },
  { id: 2, name: 'Cappuccino', category: 'Hot Coffee', image: '/images/img30.png', price: 3.49 },
  { id: 3, name: 'Latte', category: 'Hot Coffee', image: '/images/img17.png', price: 3.99 },
  { id: 4, name: 'Americano', category: 'Hot Coffee', image: '/images/img16.png', price: 2.79 },
  { id: 5, name: 'Macchiato', category: 'Hot Coffee', image: '/images/img19.png', price: 3.19 },
  // ... (add more hot coffee products)

  // Cold Coffee
  { id: 11, name: 'Iced Latte', category: 'Cold Coffee', image: './images/img27.png', price: 4.29 },
  { id: 12, name: 'Pumpkin Spice Latte', category: 'Cold Coffee', image: './images/img24.png', price: 4.99 },
  { id: 13, name: 'Hazelnut Latte', category: 'Cold Coffee', image: './images/img25.png', price: 4.49 },
  { id: 14, name: 'Iced Americano', category: 'Cold Coffee', image: './images/img26.png', price: 3.89 },
  { id: 15, name: 'Cold Brew', category: 'Cold Coffee', image: './images/img28.png', price: 4.79 },
  // ... (add more cold coffee products)

  // Desserts
  { id: 21, name: 'Croissant', category: 'Desserts', image: './images/img23.png', price: 2.49 },
  { id: 22, name: 'Muffin', category: 'Desserts', image: './images/img20.png', price: 1.99 },
  { id: 23, name: 'Cheese Cake', category: 'Desserts', image: './images/img22.png', price: 3.29 },
  { id: 24, name: 'Cookies', category: 'Desserts', image: './images/img21.png', price: 2.99 },
  { id: 25, name: 'Scone', category: 'Desserts', image: './images/img31.png', price: 2.79 },
  // ... (add more dessert products)
];

const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const categories = ['All', 'Hot Coffee', 'Cold Coffee', 'Desserts'];

  return (
    <div className="container mt-4">
      <h2>Products List</h2>

      {/* Category Filter */}
      <div className="mb-4">
        <label htmlFor="categoryFilter">Filter by Category:</label>
        <select
          id="categoryFilter"
          className="form-select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Display Products */}
      <div className="row">
        {filteredProducts.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card" style={{ width: '18rem' }}>
              {product.image && <img src={product.image} className="card-img-top" alt={product.name} />}
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: ${product.price.toFixed(2)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
