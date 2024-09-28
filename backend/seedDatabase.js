const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

// Import your models
const User = require('./models/User');
const Category = require('./models/Category');
const Item = require('./models/Item');
const Cart = require('./models/Cart');
const Order = require('./models/Order');

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Clear existing data
    await User.deleteMany({});
    await Category.deleteMany({});
    await Item.deleteMany({});
    await Cart.deleteMany({});
    await Order.deleteMany({});

    // Seed Users
    const hashedPassword = await bcrypt.hash('password123', 10);
    const users = await User.create([
      { email: 'user1@example.com', password: hashedPassword, name: 'User One', address: '123 Main St' },
      { email: 'user2@example.com', password: hashedPassword, name: 'User Two', address: '456 Elm St' }
    ]);

    // Seed Categories
    const categories = await Category.create([
      { name: 'Appetizers', description: 'Starters and small bites' },
      { name: 'Main Courses', description: 'Hearty meals' },
      { name: 'Desserts', description: 'Sweet treats' },
      { name: 'Beverages', description: 'Drinks and refreshments' }
    ]);

    // Seed Items (updated with your new JSON data)
    const items = await Item.create([
      {
        "_id": "66f77b48d23ce42ccc913418",
        "inStock": true,
        "quantity": 100,
        "name": "Paneer Butter Masala",
        "description": "Paneer cooked in a creamy tomato sauce",
        "price": 250.00,
        "category": "66f77b47d23ce42ccc913401", // Main Course
        "cuisine": "66f77b47d23ce42ccc913500", // Indian
        "image": "https://example.com/images/paneer_butter_masala.jpg",
        "createdAt": "2024-09-28T04:10:00.024+00:00",
        "updatedAt": "2024-09-28T04:10:00.024+00:00",
        "__v": 0
      },
      {
        "_id": "66f77b48d23ce42ccc913419",
        "inStock": true,
        "quantity": 80,
        "name": "Chicken Biryani",
        "description": "Aromatic basmati rice cooked with tender chicken pieces and spices",
        "price": 200.00,
        "category": "66f77b47d23ce42ccc913401", // Main Course
        "cuisine": "66f77b47d23ce42ccc913500", // Indian
        "image": "https://example.com/images/chicken_biryani.jpg",
        "createdAt": "2024-09-28T04:11:00.024+00:00",
        "updatedAt": "2024-09-28T04:11:00.024+00:00",
        "__v": 0
      },
      {
        "_id": "66f77b48d23ce42ccc913420",
        "inStock": true,
        "quantity": 120,
        "name": "Veg Hakka Noodles",
        "description": "Stir-fried noodles with vegetables, flavored with soy sauce and garlic",
        "price": 180.00,
        "category": "66f77b47d23ce42ccc913403", // Fast Food
        "cuisine": "66f77b47d23ce42ccc913501", // Chinese
        "image": "https://example.com/images/veg_hakka_noodles.jpg",
        "createdAt": "2024-09-28T04:12:00.024+00:00",
        "updatedAt": "2024-09-28T04:12:00.024+00:00",
        "__v": 0
      },
      {
        "_id": "66f77b48d23ce42ccc913421",
        "inStock": true,
        "quantity": 60,
        "name": "Margherita Pizza",
        "description": "Classic cheese pizza with a thin crust and tomato sauce",
        "price": 300.00,
        "category": "66f77b47d23ce42ccc913402", // Appetizer
        "cuisine": "66f77b47d23ce42ccc913502", // Italian
        "image": "https://example.com/images/margherita_pizza.jpg",
        "createdAt": "2024-09-28T04:13:00.024+00:00",
        "updatedAt": "2024-09-28T04:13:00.024+00:00",
        "__v": 0
      },
      {
        "_id": "66f77b48d23ce42ccc913422",
        "inStock": true,
        "quantity": 90,
        "name": "Dosa",
        "description": "Crispy fermented rice pancake served with chutney and sambar",
        "price": 100.00,
        "category": "66f77b47d23ce42ccc913401", // Main Course
        "cuisine": "66f77b47d23ce42ccc913500", // Indian
        "image": "https://example.com/images/dosa.jpg",
        "createdAt": "2024-09-28T04:14:00.024+00:00",
        "updatedAt": "2024-09-28T04:14:00.024+00:00",
        "__v": 0
      },
      {
        "_id": "66f77b48d23ce42ccc913423",
        "inStock": true,
        "quantity": 110,
        "name": "Sushi",
        "description": "Japanese dish with vinegared rice and seafood",
        "price": 350.00,
        "category": "66f77b47d23ce42ccc913402", // Appetizer
        "cuisine": "66f77b47d23ce42ccc913503", // Japanese
        "image": "https://example.com/images/sushi.jpg",
        "createdAt": "2024-09-28T04:15:00.024+00:00",
        "updatedAt": "2024-09-28T04:15:00.024+00:00",
        "__v": 0
      },
      {
        "_id": "66f77b48d23ce42ccc913424",
        "inStock": true,
        "quantity": 50,
        "name": "Momos",
        "description": "Steamed dumplings stuffed with vegetables or meat",
        "price": 120.00,
        "category": "66f77b47d23ce42ccc913403", // Fast Food
        "cuisine": "66f77b47d23ce42ccc913501", // Chinese
        "image": "https://example.com/images/momos.jpg",
        "createdAt": "2024-09-28T04:16:00.024+00:00",
        "updatedAt": "2024-09-28T04:16:00.024+00:00",
        "__v": 0
      },
      {
        "_id": "66f77b48d23ce42ccc913425",
        "inStock": true,
        "quantity": 75,
        "name": "Rajma Chawal",
        "description": "Kidney beans cooked in spices served with steamed rice",
        "price": 150.00,
        "category": "66f77b47d23ce42ccc913401", // Main Course
        "cuisine": "66f77b47d23ce42ccc913500", // Indian
        "image": "https://example.com/images/rajma_chawal.jpg",
        "createdAt": "2024-09-28T04:17:00.024+00:00",
        "updatedAt": "2024-09-28T04:17:00.024+00:00",
        "__v": 0
      },
      {
        "_id": "66f77b48d23ce42ccc913426",
        "inStock": true,
        "quantity": 95,
        "name": "Chole Bhature",
        "description": "Spiced chickpea curry served with deep-fried bread",
        "price": 140.00,
        "category": "66f77b47d23ce42ccc913401", // Main Course
        "cuisine": "66f77b47d23ce42ccc913500", // Indian
        "image": "https://example.com/images/chole_bhature.jpg",
        "createdAt": "2024-09-28T04:18:00.024+00:00",
        "updatedAt": "2024-09-28T04:18:00.024+00:00",
        "__v": 0
      },
      {
        "_id": "66f77b48d23ce42ccc913427",
        "inStock": true,
        "quantity": 85,
        "name": "Spaghetti Aglio e Olio",
        "description": "Spaghetti tossed in olive oil, garlic, and chili flakes",
        "price": 260.00,
        "category": "66f77b47d23ce42ccc913402", // Appetizer
        "cuisine": "66f77b47d23ce42ccc913502", // Italian
        "image": "https://example.com/images/spaghetti_aglio_olio.jpg",
        "createdAt": "2024-09-28T04:19:00.024+00:00",
        "updatedAt": "2024-09-28T04:19:00.024+00:00",
        "__v": 0
      }
    ]
    );

    // Seed Carts
    await Cart.create([
      { user: users[0]._id, items: [{ item: items[0]._id, quantity: 2 }, { item: items[1]._id, quantity: 1 }] },
      { user: users[1]._id, items: [{ item: items[2]._id, quantity: 1 }, { item: items[3]._id, quantity: 3 }] }
    ]);

    // Seed Orders
    await Order.create([
      { 
        user: users[0]._id, 
        items: [
          { item: items[0]._id, quantity: 2, price: items[0].price },
          { item: items[1]._id, quantity: 1, price: items[1].price }
        ],
        total: 2 * items[0].price + items[1].price,
        status: 'Delivered',
        deliveryAddress: users[0].address
      },
      {
        user: users[1]._id,
        items: [
          { item: items[2]._id, quantity: 1, price: items[2].price },
          { item: items[3]._id, quantity: 3, price: items[3].price }
        ],
        total: items[2].price + 3 * items[3].price,
        status: 'Pending',
        deliveryAddress: users[1].address
      }
    ]);

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await mongoose.disconnect();
  }
};

module.exports = seedDatabase;










// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// require('dotenv').config();

// // Import your models
// const User = require('./models/User');
// const Category = require('./models/Category');
// const Item = require('./models/Item');
// const Cart = require('./models/Cart');
// const Order = require('./models/Order');

// const sampleImageUrl = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/9/5/c023ada1-b03a-423e-b5b2-67e515aa81a1_3591e39a-1895-40a8-8264-043f8a175a28.jpeg";

// const seedDatabase = async () => {
//   try {
//     // Connect to MongoDB
//     await mongoose.connect(process.env.MONGODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     // Clear existing data
//     await User.deleteMany({});
//     await Category.deleteMany({});
//     await Item.deleteMany({});
//     await Cart.deleteMany({});
//     await Order.deleteMany({});

//     // Seed Users
//     const hashedPassword = await bcrypt.hash('password123', 10);
//     const users = await User.create([
//       { email: 'user1@example.com', password: hashedPassword, name: 'User One', address: '123 Main St' },
//       { email: 'user2@example.com', password: hashedPassword, name: 'User Two', address: '456 Elm St' }
//     ]);

//     // Seed Categories
//     const categories = await Category.create([
//       { name: 'Appetizers', description: 'Starters and small bites' },
//       { name: 'Main Courses', description: 'Hearty meals' },
//       { name: 'Desserts', description: 'Sweet treats' },
//       { name: 'Beverages', description: 'Drinks and refreshments' }
//     ]);

//     // Seed Items
//     const items = await Item.create([
//       { name: 'Bruschetta', description: 'Toasted bread with tomatoes', price: 8.99, category: categories[0]._id, image: sampleImageUrl, inStock: true, quantity: 50 },
//       { name: 'Margherita Pizza', description: 'Classic pizza', price: 14.99, category: categories[1]._id, image: sampleImageUrl, inStock: true, quantity: 30 },
//       { name: 'Tiramisu', description: 'Coffee-flavored dessert', price: 7.99, category: categories[2]._id, image: sampleImageUrl, inStock: true, quantity: 40 },
//       { name: 'Iced Latte', description: 'Chilled espresso with milk', price: 4.99, category: categories[3]._id, image: sampleImageUrl, inStock: true, quantity: 100 }
//     ]);

//     // Seed Carts
//     await Cart.create([
//       { user: users[0]._id, items: [{ item: items[0]._id, quantity: 2 }, { item: items[1]._id, quantity: 1 }] },
//       { user: users[1]._id, items: [{ item: items[2]._id, quantity: 1 }, { item: items[3]._id, quantity: 3 }] }
//     ]);

//     // Seed Orders
//     await Order.create([
//       { 
//         user: users[0]._id, 
//         items: [
//           { item: items[0]._id, quantity: 2, price: items[0].price },
//           { item: items[1]._id, quantity: 1, price: items[1].price }
//         ],
//         total: 2 * items[0].price + items[1].price,
//         status: 'Delivered',
//         deliveryAddress: users[0].address
//       },
//       {
//         user: users[1]._id,
//         items: [
//           { item: items[2]._id, quantity: 1, price: items[2].price },
//           { item: items[3]._id, quantity: 3, price: items[3].price }
//         ],
//         total: items[2].price + 3 * items[3].price,
//         status: 'Pending',
//         deliveryAddress: users[1].address
//       }
//     ]);

//     console.log('Database seeded successfully');
//   } catch (error) {
//     console.error('Error seeding database:', error);
//   } finally {
//     await mongoose.disconnect();
//   }
// };

// module.exports = seedDatabase;