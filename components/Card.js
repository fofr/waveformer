import React from 'react';

const Card = ({ heading, children }) => {
  return (
    <div className="block max-w-full p-6 mb-6 bg-white border border-4 border-gray-200 rounded-lg">
      {children}
    </div>
  );
};

export default Card;
