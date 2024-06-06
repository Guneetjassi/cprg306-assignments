// app/week-3/item-list.js
'use client';

import React from 'react';
import Item from './item';

const items = [
  { name: 'milk, 4 L 🥛', quantity: 1, category: 'dairy' },
  { name: 'bread 🍞', quantity: 2, category: 'bakery' },
  { name: 'eggs, dozen 🥚', quantity: 2, category: 'dairy' },
  { name: 'bananas 🍌', quantity: 6, category: 'produce' },
  { name: 'broccoli 🥦', quantity: 3, category: 'produce' },
  { name: 'chicken breasts, 1 kg 🍗', quantity: 1, category: 'meat' },
  { name: 'pasta sauce 🍝', quantity: 3, category: 'canned goods' },
  { name: 'spaghetti, 454 g 🍝', quantity: 2, category: 'dry goods' },
  { name: 'toilet paper, 12 pack 🧻', quantity: 1, category: 'household' },
  { name: 'paper towels, 6 pack', quantity: 1, category: 'household' },
  { name: 'dish soap 🍽️', quantity: 1, category: 'household' },
  { name: 'hand soap 🧼', quantity: 4, category: 'household' },
];

const ItemList = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold m-2">Shopping List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="p-1 m-4 bg-slate-900 max-w-sm text-black rounded-lg">
            <Item name={item.name} quantity={item.quantity} category={item.category} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
