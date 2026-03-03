import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
    const history = useHistory();
    const [cartItems, setCartItems] = useState(() => {
        const stored = localStorage.getItem("cart");
        return stored ? JSON.parse(stored) : [];
    });

    const handleRemove = (id) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const handleQuantityChange = (id, quantity) => {
        const updatedCart = cartItems.map(item => {
            if (item.id === id) {
                return { ...item, quantity }; 
            }
            return item;
        });
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    useEffect(() => {
        const stored = localStorage.getItem("cart");
        setCartItems(stored ? JSON.parse(stored) : []);
    }, []);

    const handleBuyNow = (item) => {
        history.push('/payment'); 
    };

    return (
        <div className="cart-container">
            <h2>Your Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>No items in cart.</p>
            ) : (
                <>
                    <div className="cart-items">
                        {cartItems.map((item) => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <h4>{item.name}</h4>
                                    <p>Price: ₹ {item.price}</p>
                                    <p>
                                        Quantity:
                                        <input
                                            type="number"
                                            value={item.quantity}
                                            min="1"
                                            onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                                        />
                                    </p>
                                    <button onClick={() => handleRemove(item.id)}>Remove</button>
                                    <button onClick={() => handleBuyNow(item)}>Buy Now</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cart-total">
                        <h3>Total Price: ₹ {totalPrice}</h3>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
