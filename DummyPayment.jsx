import React, { useState, useEffect } from 'react';

const Payment = () => {
    const [name, setName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvv, setCvv] = useState('');
    const [message, setMessage] = useState('');
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));
        if (selectedProduct) {
            setProduct(selectedProduct);
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && cardNumber && expiry && cvv) {
            setMessage(`Payment of $${product.price} processed successfully!`);
        } else {
            setMessage("Payment failed. Please fill all fields.");
        }
    };

    if (!product) {
        return <div>Loading product details...</div>;
    }

    return (
        <div style={styles.container}>
            <h2>Pay for {product.name}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name on Card holder"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    style={styles.input}
                />
                <input
                    type="text"
                    placeholder="Card Number"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    required
                    style={styles.input}
                />
                <input
                    type="text"
                    placeholder="MM/YY"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    required
                    style={styles.input}
                />
                <input
                    type="text"
                    placeholder="CVV"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    required
                    style={styles.input}
                />
                <button type="submit" style={styles.button}>Pay Now</button>
            </form>
            {message && <div style={styles.message}>{message}</div>}
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '400px',
        margin: '50px auto',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        textAlign: 'center'
    },
    input: {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
    },
    button: {
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        padding: '10px',
        cursor: 'pointer'
    },
    message: {
        marginTop: '20px',
        textAlign: 'center',
    }
};

export default Payment;
