


import React, { useState } from 'react';
import { items as initialItems } from './Data'; // Import your initial items array from Data

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    image: '',
  });

  const [items, setItems] = useState(initialItems); // Managing items state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add new product to the items array
    const newProduct = {
      id: items.length + 1, // Generate a new unique ID
      title: product.name,
      price: product.price,
      description: product.description,
      imgSrc: product.image,
      amazonLink: '#', // Placeholder or your logic for Amazon link
      category: 'default', // Add your category logic here
    };
    setItems([...items, newProduct]); // Push new product into items array

    // Reset form after submission
    setProduct({
      name: '',
      price: '',
      description: '',
      image: '',
    });

    console.log('Product added:', newProduct);
  };

  return (
   
    <div>
      <h3 className='text-center'>Add New Product</h3>
      <form 
        onSubmit={handleSubmit} 
        style={{
          maxWidth: '500px', 
          margin: '0 auto', 
          padding: '20px', 
          border: '1px solid #ccc', 
          borderRadius: '8px',
          backgroundColor: '#f9f9f9',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px', color: '#333' }}>
            Name:
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '10px',
                fontSize: '1rem',
                border: '1px solid #ccc',
                borderRadius: '4px',
                transition: 'border-color 0.3s ease',
              }}
            />
          </label>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px', color: '#333' }}>
            Price:
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '10px',
                fontSize: '1rem',
                border: '1px solid #ccc',
                borderRadius: '4px',
                transition: 'border-color 0.3s ease',
              }}
            />
          </label>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px', color: '#333' }}>
            Description:
            <textarea
              name="description"
              value={product.description}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '10px',
                fontSize: '1rem',
                border: '1px solid #ccc',
                borderRadius: '4px',
                transition: 'border-color 0.3s ease',
                resize: 'vertical',
                minHeight: '100px',
              }}
            />
          </label>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px', color: '#333' }}>
            Image URL:
            <input
              type="text"
              name="image"
              value={product.image}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '10px',
                fontSize: '1rem',
                border: '1px solid #ccc',
                borderRadius: '4px',
                transition: 'border-color 0.3s ease',
              }}
            />
          </label>
        </div>
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1rem',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
        >
      Add product
        </button>
      </form>

      </div>
    
  );
};

export default AddProduct;
