import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Add the styles for Navbar

const Navbar = () => {
    const FlipkartLogo = () => {
        return (
            <div className="fk-logo">
                <span className="fk-main">Flipkart</span>
                <span className="fk-sub">
                    Explore <span className="fk-plus-text">Plus</span>
                    <img
                        src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
                        alt="Plus"
                        className="fk-plus-icon"
                    />
                </span>
            </div>
        );
    };

    return (
        <nav className="navbar">
            <FlipkartLogo />
            <div className="search-bar">
                <input 
                    type="text" 
                    placeholder="Search..." 
                    aria-label="Search" 
                />
                <button type="button">Search</button>
            </div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/admin">Admin</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/dummy-payment"> Payment</Link></li>
                
            </ul>
        </nav>
    );
};

export default Navbar;
