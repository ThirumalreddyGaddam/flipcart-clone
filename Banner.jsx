import React, { useEffect, useState } from 'react';
import './Banner.css'; 

const images = [
    "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/5b0d5eb77571056a.jpg?q=60",
    "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/1fe2e3a6af22df69.png?q=60",
    "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/1338bd4fc60390d8.jpg?q=60", 
    "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/1f9c9ad24c2bc37b.jpg?q=60" 
];

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Clean up interval on component unmount
    }, []);

    return (
        <div className="banner">
            <h2>Welcome to Flipkart Clone!</h2>
            <p>Shop the latest products</p>
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        </div>
    );
};

export default Banner;
