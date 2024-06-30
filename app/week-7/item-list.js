'use client';

import React, { useState } from 'react';
import Item from './item.js';
import items from './items.json';

const ItemList = ({ onItemSelect }) => {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'category') return a.category.localeCompare(b.category);
    return 0;
  });

  const groupedItems = sortedItems.reduce((groups, item) => {
    if (!groups[item.category]) {
      groups[item.category] = [];
    }
    groups[item.category].push(item);
    return groups;
  }, {});

  const renderItems = () => {
    if (sortBy === 'groupedCategory') {
      return Object.keys(groupedItems).sort().map((category) => (
        <div key={category} className="mb-4">
          <h2 className="capitalize text-xl font-bold mb-2">{category}</h2>
          {groupedItems[category].sort((a, b) => a.name.localeCompare(b.name)).map((item) => (
            <div key={item.id} onClick={() => onItemSelect(item)}>
              <Item item={item} onSelect={onItemSelect} />
            </div>
          ))}
        </div>
      ));
    }
    return sortedItems.map((item) => (
      <div key={item.id} onClick={() => onItemSelect(item)}>
        <Item item={item} onSelect={onItemSelect} />
      </div>
    ));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="flex items-center mb-4">
        <span className="mr-2">Sort by:</span>
        <button
          className={`mr-2 py-2 px-4 rounded ${sortBy === 'name' ? 'bg-orange-500' : 'bg-gray-700'}`}
          onClick={() => setSortBy('name')}
        >
          Name
        </button>
        <button
          className={`mr-2 py-2 px-4 rounded ${sortBy === 'category' ? 'bg-orange-500' : 'bg-gray-700'}`}
          onClick={() => setSortBy('category')}
        >
          Category
        </button>
      </div>
      <div>{renderItems()}</div>
    </div>
  );
};

export default ItemList;
