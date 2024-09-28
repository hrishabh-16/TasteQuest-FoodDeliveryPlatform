import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import CartItem from './CartItem'; // Assuming CartItem is used for individual cart items
import { toast } from 'react-toastify';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();
  const { user } = useAuth();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    if (!user) {
      toast.error('Please log in to checkout');
      return;
    }

    setIsCheckingOut(true);
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cart),
      });

      if (response.ok) {
        toast.success('Checkout successful!');
        clearCart(); // Clear the cart after successful checkout
      } else {
        const data = await response.json();
        toast.error(data.message || 'Checkout failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during checkout:', error);
      toast.error('An error occurred during checkout. Please try again.');
    }
    setIsCheckingOut(false);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-4">
      <h2 className="text-2xl font-bold mb-4 text-orange-600">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between mb-4">
              <CartItem item={item} />
              <div className="flex space-x-4">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="px-2 py-1 bg-gray-300 rounded"
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-2 py-1 bg-gray-300 rounded"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4 px-4 py-2 bg-red-500 text-white rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="mt-6">
            <p className="text-xl font-semibold text-orange-600">
              Total: ${totalPrice.toFixed(2)}
            </p>
            <button
              onClick={handleCheckout}
              disabled={isCheckingOut}
              className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300 disabled:opacity-50"
            >
              {isCheckingOut ? 'Processing...' : 'Pay and Proceed'}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
