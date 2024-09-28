import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios'; // Added axios for API calls
import { useAuth, AuthContext } from './AuthContext';

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const { user } = useAuth() || useContext(AuthContext);

  useEffect(() => {
    if (user) {
      // Fetch cart data from the server when the user logs in
      fetchCartData();
    } else {
      // Clear the cart when the user logs out
      setCart([]);
    }
  }, [user]);

  const fetchCartData = async () => {
    try {
      const response = await axios.get(`/api/cart/${user.id}`);
      if (response.status === 200) {
        setCart(response.data);
      }
    } catch (error) {
      console.error('Error fetching cart data:', error);
      toast.error('Failed to load your cart. Please try again.');
    }
  };

  const addToCart = async (item) => {
    try {
      const response = await fetch('/api/inventory/check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ itemId: item.id, quantity: 1 }),
      });

      if (response.ok) {
        const updatedCart = [...cart, { ...item, quantity: 1 }];
        setCart(updatedCart);
        if (user) {
          await updateCartOnServer(updatedCart);
        }
        toast.success('Item added to cart');
      } else {
        toast.error('Item is out of stock');
      }
    } catch (error) {
      console.error('Error adding item to cart:', error);
      toast.error('Failed to add item to cart. Please try again.');
    }
  };

  const updateQuantity = async (itemId, newQuantity) => {
    try {
      const response = await fetch('/api/inventory/check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ itemId, quantity: newQuantity }),
      });

      if (response.ok) {
        const updatedCart = cart.map(item =>
          item.id === itemId ? { ...item, quantity: newQuantity } : item
        );
        setCart(updatedCart);
        if (user) {
          await updateCartOnServer(updatedCart);
        }
        toast.success('Quantity updated');
      } else {
        toast.error('Requested quantity is not available');
      }
    } catch (error) {
      console.error('Error updating quantity:', error);
      toast.error('Failed to update quantity. Please try again.');
    }
  };

  const removeFromCart = async (itemId) => {
    try {
      const updatedCart = cart.filter(item => item.id !== itemId);
      setCart(updatedCart);
      if (user) {
        await updateCartOnServer(updatedCart);
      }
      toast.info('Item removed from cart');
    } catch (error) {
      console.error('Error removing item from cart:', error);
      toast.error('Failed to remove item. Please try again.');
    }
  };

  const clearCart = async () => {
    try {
      await axios.delete(`/api/cart/clear`);
      setCart([]);
      toast.success('Cart cleared');
    } catch (error) {
      console.error('Error clearing cart:', error);
      toast.error('Failed to clear the cart. Please try again.');
    }
  };

  const updateCartOnServer = async (updatedCart) => {
    try {
      await axios.put(`/api/cart/${user.id}`, updatedCart);
    } catch (error) {
      console.error('Error updating cart on server:', error);
      toast.error('Failed to sync your cart. Please try again.');
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
