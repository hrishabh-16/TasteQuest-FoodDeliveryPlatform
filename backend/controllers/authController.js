const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

exports.register = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }
    user = new User({ email, password, name });
    await user.save();
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(201).json({ message: 'User registered successfully', token, user: { id: user._id, email: user.email, name: user.name } });
  } catch (error) {
    res.status(400).json({ message: 'Registration failed', error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ message: 'Logged in successfully', token, user: { id: user._id, email: user.email, name: user.name } });
  } catch (error) {
    res.status(400).json({ message: 'Login failed', error: error.message });
  }
};

exports.getUser = async (req, res) => {
  // The user is already attached to the request by the auth middleware
  res.json(req.user);
};

exports.googleSignIn = async (req, res) => {
  try {
    const { token } = req.body;
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    
    const { email, name, picture } = ticket.getPayload();
    
    let user = await User.findOne({ email });
    
    if (!user) {
      // Create a new user if they don't exist
      const password = Math.random().toString(36).slice(-8); // Generate a random password
      user = new User({
        email,
        name,
        password,
        profilePicture: picture,
        googleId: ticket.getUserId(),
      });
      await user.save();
    }
    
    const jwtToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ message: 'Google sign-in successful', token: jwtToken, user: { id: user._id, email: user.email, name: user.name } });
  } catch (error) {
    console.error('Error processing Google Sign-In:', error);
    res.status(400).json({ message: 'Google sign-in failed', error: error.message });
  }
};