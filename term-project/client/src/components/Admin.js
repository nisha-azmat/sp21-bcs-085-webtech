// Admin.js

import React, { useEffect, useState } from 'react';
import axios from "axios"
import {url} from "../url"

const Admin = () => {
  // State to manage products
  const [products, setProducts] = useState([]);
  
  // State to manage the form inputs
  const [formData, setFormData] = useState({ name: '', price: '' });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(()=>{
    const getData = async()=>{
      try {
        const data = await axios.get(`${url}/api/product/get-products`)
        console.log(data)
        setProducts(data?.data.products)
      } catch (error) {
        
      }
    }
    getData()
  },[])

  // Function to handle product addition
  const handleAddProduct = async() => {
    if (formData.name && formData.price) {
      // Create a new product object
      const newProduct = {
        id: new Date().getTime(),
        name: formData.name,
        price: parseFloat(formData.price),
      };
      try {
        const res = await axios.post(`${url}/api/product/add-product`,newProduct)
        alert(res.data.message)
      } catch (error) {
        alert(error.response.data.message)
      }
      // Update the products state
      setProducts([...products, newProduct]);

      // Clear the form data
      setFormData({ name: '', price: '' });
    }
  };

  // Function to handle product deletion
  const handleDeleteProduct =async(productId) => {
    // console.log(productId)
    try {
      const data = await axios.delete(`${url}/api/product/delete-product/${productId}`)
      alert(data.data.message)
    } catch (error) {
      alert(error.response.data.message)
    }
    const updatedProducts = products.filter((product) => product._id !== productId);
    setProducts(updatedProducts);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Product Management</h2>

      {/* Product Form */}
      <form>
        <div className="form-group">
          <label htmlFor="productName">Name:</label>
          <input type="text" className="form-control" id="productName" name="name" value={formData.name} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="productPrice">Price:</label>
          <input type="text" className="form-control" id="productPrice" name="price" value={formData.price} onChange={handleInputChange} />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleAddProduct}>Add Product</button>
      </form>

      {/* Product Table */}
      <table className="table mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product,index) => (
            <tr key={index+1}>
              <td>{index+1}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <button type="button" className="btn btn-danger" onClick={() => handleDeleteProduct(product._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
