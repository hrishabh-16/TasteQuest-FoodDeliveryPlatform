const mongoose = require('mongoose');
const Item = require('./models/Item');
require('dotenv').config();

const sampleItems = [
    {
        name: "Fresh Oranges",
        description: "Sweet and juicy oranges, perfect for snacking or juicing.",
        price: 3.99,
        category: "Fruits",
        subcategory: "Citrus Fruits",
        image: "https://example.com/images/oranges.jpg",
      },
      {
        name: "Organic Spinach",
        description: "Fresh, organic spinach leaves. Great for salads or cooking.",
        price: 2.99,
        category: "Vegetables",
        subcategory: "Leafy Greens",
        image: "https://example.com/images/spinach.jpg",
      },
      {
        name: "Strawberries",
        description: "Sweet and ripe strawberries, perfect for desserts and smoothies.",
        price: 4.49,
        category: "Fruits",
        subcategory: "Berries",
        image: "https://example.com/images/strawberries.jpg",
      },
      {
        name: "Carrots",
        description: "Crisp and crunchy carrots, great for snacks or salads.",
        price: 1.99,
        category: "Vegetables",
        subcategory: "Root Vegetables",
        image: "https://example.com/images/carrots.jpg",
      },
      {
        name: "Blueberries",
        description: "Fresh blueberries, packed with antioxidants. Ideal for breakfast.",
        price: 5.99,
        category: "Fruits",
        subcategory: "Berries",
        image: "https://example.com/images/blueberries.jpg",
      },
      {
        name: "Kale",
        description: "Nutritious kale leaves, perfect for smoothies or salads.",
        price: 3.49,
        category: "Vegetables",
        subcategory: "Leafy Greens",
        image: "https://example.com/images/kale.jpg",
      },
      {
        name: "Bananas",
        description: "Ripe bananas, great for a quick snack or in smoothies.",
        price: 1.29,
        category: "Fruits",
        subcategory: "Tropical Fruits",
        image: "https://example.com/images/bananas.jpg",
      },
      {
        name: "Bell Peppers",
        description: "Crunchy bell peppers, perfect for salads or stir-fries.",
        price: 2.49,
        category: "Vegetables",
        subcategory: "Cruciferous",
        image: "https://example.com/images/bell_peppers.jpg",
      },
      {
        name: "Avocados",
        description: "Creamy avocados, ideal for salads or spreads.",
        price: 2.99,
        category: "Fruits",
        subcategory: "Tropical Fruits",
        image: "https://example.com/images/avocados.jpg",
      },
      {
        name: "Sweet Potatoes",
        description: "Nutritious sweet potatoes, great for roasting or mashing.",
        price: 1.89,
        category: "Vegetables",
        subcategory: "Root Vegetables",
        image: "https://example.com/images/sweet_potatoes.jpg",
      },
      {
        name: "Raspberries",
        description: "Delicious raspberries, perfect for desserts or smoothies.",
        price: 4.99,
        category: "Fruits",
        subcategory: "Berries",
        image: "https://example.com/images/raspberries.jpg",
      },
      {
        name: "Zucchini",
        description: "Fresh zucchini, great for grilling or in stir-fries.",
        price: 2.29,
        category: "Vegetables",
        subcategory: "Seasonal Vegetables",
        image: "https://example.com/images/zucchini.jpg",
      },
    ];

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedDatabase = async () => {
  try {
    await Item.deleteMany({});
    await Item.insertMany(sampleItems);
    console.log('Database seeded successfully');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding database:', error);
    mongoose.connection.close();
  }
};

seedDatabase();