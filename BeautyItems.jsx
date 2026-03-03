import React, { useState, useEffect } from 'react';
import AddBeautyItem from './AddBeautyItem'; 
import './BeautyItems.css'; // Ensure you create this CSS file for styling

const BeautyItems = () => {
  const [products, setProducts] = useState([]);

  // Load products from localStorage on component mount
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('beautyProducts')) || [];
    setProducts(storedProducts);
  }, []);

  // Save products to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('beautyProducts', JSON.stringify(products));
  }, [products]);

  const handleAdd = (newItem) => {
    setProducts((prevProducts) => [...prevProducts, newItem]);
  };

  const handleRemove = (id) => {
    setProducts((prevProducts) => prevProducts.filter(product => product.id !== id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Beauty Items</h2>
      <AddBeautyItem onAdd={handleAdd} />
      <div className="products-container">
        {products.length === 0 ? (
          <p>No items added yet.</p>
        ) : (
          products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h4>{product.name} - ₹{product.price}</h4>
              <p>Quantity: {product.quantity}</p>
              <button className="remove-button" onClick={() => handleRemove(product.id)}>Remove</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BeautyItems;
