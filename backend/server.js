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





const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const itemRoutes = require('./routes/itemRoutes');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/auth', authRoutes);
app.use('/api', itemRoutes);

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
