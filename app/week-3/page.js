import React from 'react';
import Item from './item';

const items = [
  { name: 'Apples', quantity: 4, category: 'Fruits' },
  { name: 'Bread', quantity: 2, category: 'Bakery' },
  { name: 'Milk', quantity: 1, category: 'Dairy' },
];

const Week3Page = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
      <ul className="bg-white shadow rounded-lg">
        {items.map((item, index) => (
          <Item 
            key={index} 
            name={item.name} 
            quantity={item.quantity} 
            category={item.category} 
          />
        ))}
      </ul>
    </div>
  );
};

export default Week3Page;
