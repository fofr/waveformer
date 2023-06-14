import React from 'react';

const Card = ({ heading, children }) => {
  return (
    <div className="block max-w-full p-6 mb-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {heading}
      </h2>
      {children}
    </div>
  );
};

export default Card;
