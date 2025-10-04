import React from 'react';

const Lang = () => {
  return (
    <div className="bg-black px-4 min-w-screen py-2 flex items-center space-x-2 w-fit">
      <img
        src="https://flagcdn.com/us.svg" 
        alt="US Flag"
        className="w-5 h-5 rounded-full object-cover border-white border-1 p-0.5"
      />
      <span className="text-white text-sm hover:underline">US</span>
    </div>
  );
};

export default Lang;
