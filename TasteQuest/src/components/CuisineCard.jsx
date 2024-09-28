
import React from 'react';

const CuisineCard = ({ cuisine }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-primary transition-all duration-300 cursor-pointer text-center">
      <img src={cuisine.image} alt={cuisine.name} className="w-full h-32 object-cover rounded-md mb-4" />
      <span className="text-lg font-bold text-gray-800">{cuisine.name}</span>
    </div>
  );
};

export default CuisineCard;
