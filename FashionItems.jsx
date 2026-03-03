import React, { useState, useEffect } from 'react';
import AddFashionItem from './AddFashionItem'; 
import './FashionItems.css'; // Ensure you create this CSS file for styling

const FashionItems = () => {
  const [products, setProducts] = useState([]);

  // Load products from localStorage on component mount
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('fashionProducts')) || [];
    setProducts(storedProducts);
  }, []);

  // Save products to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('fashionProducts', JSON.stringify(products));
  }, [products]);

  const handleAdd = (newItem) => {
    setProducts(prevProducts => [...prevProducts, newItem]);
  };

  const handleRemove = (id) => {
    setProducts(prevProducts => prevProducts.filter(product => product.id !== id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Fashion Items</h2>
      <AddFashionItem onAdd={handleAdd} />
      <div className="products-container">
        {products.length === 0 ? (
          <p>No items added yet.</p>
        ) : (
          products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h4>{product.name} - ₹{product.price}</h4>
              <button className="remove-button" onClick={() => handleRemove(product.id)}>Remove</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FashionItems;
