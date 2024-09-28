const Order = require('../models/Order');
const Cart = require('../models/Cart');

exports.processCheckout = async (req, res, next) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id }).populate('items.item');
    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: 'Cart is empty' });
    }
    // Here you would typically process payment
    // For this example, we'll just create an order
    const order = new Order({
      user: req.user._id,
      items: cart.items,
      total: cart.items.reduce((total, item) => total + item.item.price * item.quantity, 0),
      status: 'Paid'
    });
    await order.save();
    cart.items = [];
    await cart.save();
    res.status(201).json({ message: 'Checkout successful', order });
  } catch (error) {
    next(error);
  }
};