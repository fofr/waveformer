import React from 'react';

const Card = ({ heading, children }) => {
  return (
    <div className="block max-w-full md:p-6 p-2 mb-6 bg-white border md:border-4 border-2 border-gray-200 rounded-lg">
      {children}
    </div>
  );
};

export default Card;
