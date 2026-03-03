import { useState, useEffect } from "react";

function AdminPage() {
    const [products, setProducts] = useState(() => {
        const stored = localStorage.getItem("products");
        return stored ? JSON.parse(stored) : [];
    });

    const [formData, setFormData] = useState({
        name: "",
        price: "",
        image: "",
        quantity: ""
    });

    // Save the products to local storage when updated
    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products));
    }, [products]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const addProduct = () => {
        if (!formData.name || !formData.price || !formData.image || !formData.quantity) return;

        const newProduct = { id: Date.now(), ...formData };
        setProducts([...products, newProduct]);

        alert("✅ Product added");
        setFormData({ name: "", price: "", image: "", quantity: "" }); // Reset form fields
    };

    const removeProduct = (id) => {
        const updated = products.filter((p) => p.id !== id);
        setProducts(updated);
        alert("🗑️ Product removed");
    }; 

    const addCart = (product) => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`Product "${product.name}" added to cart`);
    };

    return (
        <div style={{ padding: "40px" }}>
            <h2>Add Product</h2>

            <input
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
            /><br /><br />

            <input
                name="price"
                placeholder="Price"
                value={formData.price}
                onChange={handleChange}
            /><br /><br />

            <input
                name="quantity"
                placeholder="Quantity"
                value={formData.quantity}
                onChange={handleChange}
            /><br /><br />

            <input
                name="image"
                placeholder="Image URL"
                value={formData.image}
                onChange={handleChange}
            /><br /><br />

            <button onClick={addProduct}>Add Product</button>

            <h2 style={{ marginTop: "40px" }}>Current Products</h2>
            {products.length === 0 && <p>No products added yet</p>}

            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginTop: "20px" }}>
                {products.map((p) => (
                    <div key={p.id} style={{
                        border: "1px solid #ccc",
                        padding: "15px",
                        width: "220px",
                        borderRadius: "10px",
                        textAlign: "center",
                        boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
                    }}>
                        <img
                            src={p.image}
                            alt={p.name}
                            style={{ width: "200px", height: "150px", objectFit: "cover", borderRadius: "6px" }}
                        />
                        <h4>{p.name}</h4>
                        <p>Price: ₹ {p.price}</p>
                        <p>Quantity: {p.quantity}</p>
                        <button
                            style={{
                                backgroundColor: "#dc3545",
                                color: "#fff",
                                border: "none",
                                padding: "6px 10px",
                                borderRadius: "5px",
                                cursor: "pointer",
                                marginTop: "5px",
                                fontWeight: "bold"
                            }}
                            onClick={() => removeProduct(p.id)}
                        >
                            Remove
                        </button>
                        <br /><br />
                        <button
                            style={{    
                                backgroundColor: "#28a745",
                                color: "#fff",
                                border: "none",
                                padding: "6px 10px",
                                borderRadius: "5px",
                                cursor: "pointer",
                                marginTop: "5px",
                                fontWeight: "bold"
                            }}
                            onClick={() => addCart(p)}
                        >
                            Add to Cart
                        </button>   
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AdminPage;
