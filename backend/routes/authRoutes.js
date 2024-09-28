// const express = require('express');
// const { register, login, getUser } = require('../controllers/authController');
// const auth = require('../middleware/auth');

// const router = express.Router();

// router.post('/register', register);
// router.post('/login', login);
// router.get('/user', auth, getUser);

// module.exports = router;
// const express = require('express');
// const router = express.Router();
// const authController = require('../controllers/authController');
// const auth = require('../middleware/auth');

// router.post('/register', authController.register);
// router.post('/login', authController.login);
// router.get('/user', auth, authController.getUser);
// // router.post('/logout', auth, authController.logout);

// module.exports = router;


// const express = require('express');
// const router = express.Router();
// const authController = require('../controllers/authController');
// const auth = require('../middleware/auth');

// router.post('/register', authController.register);
// router.post('/login', authController.login);
// router.get('/user', auth, authController.getUser);
// router.post('/google', authController.googleSignIn);

// module.exports = router;


const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const auth = require('../middleware/auth');
const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/user', auth, authController.getUser);
// router.post('/logout', auth, authController.logout);

// New Google Sign-In route
router.post('/google', async (req, res) => {
  const { token } = req.body;
  
  try {
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
    
    // Generate JWT
    const jwtToken = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    
    res.json({ token: jwtToken, user: { id: user._id, email: user.email, name: user.name } });
  } catch (error) {
    console.error('Error processing Google Sign-In:', error);
    res.status(400).json({ message: 'Invalid token' });
  }
});

module.exports = router;