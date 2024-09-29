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

  return (
    <div className="border rounded-lg p-4 shadow-md">
      <div className="flex items-center mb-2">
        <Utensils className={`w-5 h-5 ${item.veg ? 'text-green-500' : 'text-red-500'} mr-2`} />
        <span>{item.veg ? 'Veg' : 'Non-Veg'}</span>
      </div>
      <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
      <div className="flex items-center mb-2">
        <Star className="w-5 h-5 text-yellow-400 mr-1" />
        <span>{item.rating.toFixed(1)}</span>
      </div>
      <p className="text-sm text-gray-600 mb-2">{item.description}</p>
      <p className="font-bold mb-2">₹{item.price}</p>
      <p className="text-sm text-gray-500 mb-4">{item.cuisine}</p>
      {quantity > 0 ? (
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleUpdateQuantity(quantity - 1)}
            className="px-2 py-1 bg-gray-300 rounded"
          >
            -
          </button>
          <span className="mx-2">{quantity}</span>
          <button
            onClick={() => handleUpdateQuantity(quantity + 1)}
            className="px-2 py-1 bg-gray-300 rounded"
          >
            +
          </button>
        </div>
      ) : (
        <button
          onClick={handleAddToCart}
          disabled={!item.inStock}
          className={`w-full py-2 px-4 rounded ${
            item.inStock
              ? 'bg-blue-500 text-white hover:bg-blue-600'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {item.inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      )}
    </div>
  );
};

export default FoodItemCard;
