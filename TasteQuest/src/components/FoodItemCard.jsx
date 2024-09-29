import React from 'react';
import { Star, Utensils } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';

const FoodItemCard = ({ item }) => {
  const { cart, addToCart, updateQuantity, removeFromCart } = useCart();
  const { user } = useAuth();
  const cartItem = cart.find(cartItem => cartItem._id === item._id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const handleAddToCart = async () => {
    if (!user) {
      toast.error('Please log in to add items to your cart');
      return;
    }
    await addToCart(item);
  };

  const handleUpdateQuantity = async (newQuantity) => {
    if (newQuantity === 0) {
      await removeFromCart(item._id);
    } else {
      await updateQuantity(item._id, newQuantity);
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          size={16}
          fill={i < Math.floor(rating) ? "yellow" : "none"}
          color={i < Math.floor(rating) ? "yellow" : "gray"}
        />
      );
    }
    return stars;
  };

  return (
    <div className={`relative flex flex-col rounded-lg shadow-md overflow-hidden ${item.inStock ? 'bg-white' : 'bg-gray-200'}`}>
      <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
      <div className="absolute top-2 left-2 bg-white rounded-full p-1">
        {item.veg ? (
          <div className="w-4 h-4 border-2 border-green-500 flex items-center justify-center">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>
        ) : (
          <div className="w-4 h-4 border-2 border-red-500 flex items-center justify-center">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          </div>
        )}
      </div>
      <div className="p-4 flex-grow">
        <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
        <div className="flex items-center mb-2">
          {renderStars(item.rating)}
          <span className="ml-1 text-sm text-gray-600">{item.rating.toFixed(1)}</span>
        </div>
        <p className="text-sm text-gray-600 mb-2">{item.description}</p>
        <div className="flex justify-between items-center mb-2">
          <span className="text-lg font-bold">₹{item.price}</span>
          <span className="text-sm text-gray-500">{item.cuisine}</span>
        </div>
      </div>
      <div className="p-4 bg-gray-100">
        {quantity > 0 ? (
          <div className="flex items-center justify-between">
            <button
              onClick={() => handleUpdateQuantity(quantity - 1)}
              className="px-3 py-1 bg-gray-300 rounded"
            >
              -
            </button>
            <span className="mx-2">{quantity}</span>
            <button
              onClick={() => handleUpdateQuantity(quantity + 1)}
              className="px-3 py-1 bg-gray-300 rounded"
            >
              +
            </button>
          </div>
        ) : (
          <button
            onClick={handleAddToCart}
            disabled={!item.inStock}
            className={`w-full py-2 rounded ${
              item.inStock
                ? 'bg-orange-500 text-white hover:bg-orange-600'
                : 'bg-gray-400 text-gray-200 cursor-not-allowed'
            }`}
          >
            {item.inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
        )}
      </div>
    </div>
  );
};

export default FoodItemCard;