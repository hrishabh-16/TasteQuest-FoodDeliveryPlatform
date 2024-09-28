
import React from 'react';

const FoodItemCard = ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-all duration-300">
      <img src={item.image} alt={item.name} className="rounded-lg w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold text-primary">{item.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{item.description}</p>
        <p className="text-primary font-bold">₹{item.price}</p>
      </div>
    </div>
  );
};

export default FoodItemCard;
