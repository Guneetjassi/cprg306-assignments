import React from 'react';
import NewItem from './new-item';

const Page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md max-w-md w-full">
        
        <NewItem />
      </div>
    </div>
  );
};

export default Page;
