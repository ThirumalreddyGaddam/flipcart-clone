import React from 'react';
import './ProductCard.css'; // Create styles for ProductCard

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>Price: ₹ {product.price}</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default ProductCard;
