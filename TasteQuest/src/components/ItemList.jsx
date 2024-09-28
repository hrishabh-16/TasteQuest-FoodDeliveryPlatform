import React from 'react';

const ItemList = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item) => (
        <div key={item._id} className="border rounded-lg p-4 shadow-md">
          <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-2 rounded-md" />
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p className="text-sm text-gray-600 mb-2">{item.description}</p>
          <p className="text-primary font-bold">${item.price.toFixed(2)}</p>
          <p className="text-sm text-gray-500">
            {item.category} - {item.subCategory}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
