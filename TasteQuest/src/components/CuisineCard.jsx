import React from 'react';

const CuisineCard = ({ cuisine }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <img src={cuisine.image} alt={cuisine.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{cuisine.name}</h3>
        <p className="text-sm text-gray-600">{cuisine.description}</p>
      </div>
    </div>
  );
};

export default CuisineCard;
