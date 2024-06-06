// app/week-3/item.js
import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <div className="p-2 m-4 bg-slate-200 rounded-lg">
      <h2 className="text-xl font-bold">{name}</h2>
      <p>Buy {quantity} in {category}</p>
    </div>
  );
};

export default Item;
