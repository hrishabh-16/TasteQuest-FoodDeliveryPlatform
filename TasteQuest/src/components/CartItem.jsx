import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useContext(CartContext);

  return (
    <div className="flex items-center justify-between border-b py-4">
      <div className="flex items-center">
        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded mr-4" />
        <div>
          <h3 className="font-semibold text-orange-600">{item.name}</h3>
          <p className="text-gray-600">${item.price.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex items-center">
        <button
          onClick={() => updateQuantity(item._id, item.quantity - 1)}
          className="bg-orange-500 text-white w-8 h-8 rounded-full"
        >
          -
        </button>
        <span className="mx-2">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item._id, item.quantity + 1)}
          className="bg-orange-500 text-white w-8 h-8 rounded-full"
        >
          +
        </button>
        <button
          onClick={() => removeFromCart(item._id)}
          className="ml-4 text-red-500 hover:text-red-700"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;