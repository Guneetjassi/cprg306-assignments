import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="p-4 border-b border-gray-200">
      <div className="flex justify-between">
        <div>
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-sm text-gray-500">{category}</p>
        </div>
        <div className="text-lg font-bold">{quantity}</div>
      </div>
    </li>
  );
};

export default Item;
