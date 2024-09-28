const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const itemRoutes = require('./routes/itemRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const cartRoutes = require('./routes/cartRoutes');
const orderRoutes = require('./routes/orderRoutes');
const searchRoutes = require('./routes/searchRoutes');
const profileRoutes = require('./routes/profileRoutes');
const checkoutRoutes = require('./routes/checkoutRoutes');
const seedDatabase = require('./seedDatabase');

const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(cors({
  origin: [process.env.FRONTEND_URL, "http://localhost:5173"],credentials: true}));
app.use(express.json());

const PORT = process.env.PORT || 6000;

// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('MongoDB connected'))
// .catch((err) => console.log(err));

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected');
  if (process.argv.includes('--seed')) {
    return seedDatabase();
  }
})
.then(() => {
  if (!process.argv.includes('--seed')) {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } else {
    console.log('Seeding completed. Exiting...');
    process.exit(0);
  }
})
.catch((err) => console.log(err));
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to TasteQuest API' });
});

app.use('/api/auth', authRoutes);
app.use('/api/items', itemRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/search', searchRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/checkout', checkoutRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// require('dotenv').config();

// const authRoutes = require('./routes/authRoutes');

// const app = express();

// app.use(cors());
// app.use(express.json());

// const PORT = process.env.PORT || 5002;

// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('MongoDB connected'))
// .catch((err) => console.log(err));

// app.get('/', (req, res) => {
//   res.json({ message: 'Welcome to TasteQuest API' });
// });

// app.use('/api/auth', authRoutes);

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });