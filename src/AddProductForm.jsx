//Task 6

import React, { useState } from 'react';

function AddProductForm({ addProduct }) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const createPro = (event) => {
        const { name, value } = event.target
            if (name === 'name') setName(value)
            if (name === 'price') setPrice(value)
            if (name === 'description') setDescription(value);
    }; 

    const handleSubmit = (event) => {
        event.preventDefault();
        if (name && price && description) {
            addProduct({name, price, description })
            setName('')
            setPrice('')
            setDescription('');
        } 
    };

  return (
    <div> 
      <h1>Add New Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
            <label>
                Name:
                <input type="text" name="name" value={name} 
                onChange={createPro} />
            </label>
        </div>
        <div>
            <label>
                Price:
                <input type="number" name="price" value={price} 
                onChange={createPro} />
            </label>
        </div>
        <div>
            <label>
                Description:
                <input type="text" name="description" value={description} 
                onChange={createPro} />
            </label>
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProductForm;