import React from 'react';
import { Link } from 'react-router-dom'; 
import Banner from './Banner.jsx';
import FashionDeals from './FashionDeals.jsx'; 
import './Home.css';

const Home = () => {
    return (
        <div className="container">
            <Categories />
            <Banner />
            <FashionDeals />
        </div>
    );
};

const Categories = () => {
    return (
        <div className="categories">
            <h3>Categories</h3>
            <div className="categories-list">
                <Link to="/electronics" aria-label="Electronics">Electronics</Link>
                <Link to="/fashion" aria-label="Fashion">Fashion</Link>
                <Link to="/home&kitchen" aria-label="Home & Kitchen">Home & Kitchen</Link>
                <Link to="/beauty" aria-label="Beauty">Beauty</Link>
            </div>
        </div>
    );
};

export default Home;

function Deal({ img, title, offer }) {
    return (
        <div className="fk-item">
            <img src={img} alt={title} onError={(e) => { e.target.src = 'path/to/placeholder.png'; }} />
            <p>{title}</p>
            <span>{offer}</span>
        </div>
    );
}


