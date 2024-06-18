import React from 'react';

const Item = ({ item }) => {
  return (
    <div className="bg-gray-800 p-4 mb-2 rounded-md">
      <div className="flex items-center">
        <span className="text-lg font-bold">{item.name}</span>
        {item.emoji && <span className="ml-2">{item.emoji}</span>}
      </div>
      <div className="text-gray-400">Buy {item.quantity} in {item.category}</div>
    </div>
  );
};

export default Item;
