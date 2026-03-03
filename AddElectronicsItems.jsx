import React, { useState } from 'react';

const AddElectronicsItems = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    image: '',
    quantity: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price || !formData.image || !formData.quantity) return;

    const newItem = {
      id: Date.now(), // unique ID using timestamp
      ...formData,
      quantity: parseInt(formData.quantity, 10), // Convert quantity to integer
    };

    onAdd(newItem);
    alert("✅ Product added");
    setFormData({ name: "", price: "", image: "", quantity: "" }); // Reset form
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Item Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        name="price"
        type="number"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        required
      />
      <input
        name="quantity"
        type="number"
        placeholder="Quantity"
        value={formData.quantity}
        onChange={handleChange}
        required
      />
      <input
        name="image"
        placeholder="Image URL"
        value={formData.image}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddElectronicsItems;
