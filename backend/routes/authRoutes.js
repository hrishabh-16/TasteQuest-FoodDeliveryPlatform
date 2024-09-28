// const express = require('express');
// const { register, login, getUser } = require('../controllers/authController');
// const auth = require('../middleware/auth');

// const router = express.Router();

// router.post('/register', register);
// router.post('/login', login);
// router.get('/user', auth, getUser);

// module.exports = router;
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const auth = require('../middleware/auth');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/user', auth, authController.getUser);
// router.post('/logout', auth, authController.logout);

module.exports = router;