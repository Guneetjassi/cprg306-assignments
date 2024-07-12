'use client';

import React, { useState } from 'react';

const NewItem = () => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

  const handleSubmit = (a) => {
    a.preventDefault();
    const item = { name, quantity, category };
    console.log(item);
    alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);
    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      
      <div 
          className="mb-4">
        <label htmlFor="name" className="sr-only">Item name</label>

        <input type="text"  id="name" placeholder="Item name"

          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-900"/>
          </div> 
          
          <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="quantity" className="sr-only">Quantity</label>
          
          <input type="number" id="quantity" min="1" max="99" value={quantity}

            onChange={(e) => setQuantity(Number(e.target.value))}
            required

            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-900"/></div>

        <div>
          <label htmlFor="category" className="sr-only">Category</label>
          <select id="category" value={category}

            onChange={(a) => setCategory(a.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-900">

            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700"
        >
          +
        </button>
      </div>
    </form>
  );
};

export default NewItem;
