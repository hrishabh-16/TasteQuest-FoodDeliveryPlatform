const mongoose = require('mongoose');
require('dotenv').config();

// Import your Cuisine model
const Cuisine = require('./models/Cuisine');

const cuisines = [
  {
    name: "Indian",
    description: "Spicy and flavorful dishes from the Indian subcontinent",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/1d578bb732e03c6f591790eb7d2d88e2"
  },
  {
    name: "Chinese",
    description: "Diverse flavors from China's rich culinary traditions",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/yybzl3yxaefdrajiekbq"
  },
  {
    name: "Thai",
    description: "Aromatic dishes with a perfect balance of flavors",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/a6dc728d455b05266884b032bfce155d"
  },
  {
    name: "Spanish",
    description: "Vibrant and diverse cuisine from the Iberian Peninsula",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/5/1/49909389-3160-4ea4-8053-b5997ccf352a_e4c1c0a8-ae38-4a28-980c-644ded50ade4.jpeg"
  },
  {
    name: "Italian",
    description: "Classic Mediterranean flavors and world-famous pasta dishes",
    image: "https://blog.swiggy.com/wp-content/uploads/2024/09/Image-7_Alfredo-Pasta-1024x538.png"
  },
  {
    name: "Mexican",
    description: "Bold and zesty flavors from south of the border",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/4/18/c55e3828-22ec-4a32-a7d2-b59bd98a5cdf_74f48ecf-4bc8-4bae-b2f6-b87566db5208.jpg_compressed"
  },
  {
    name: "South Indian",
    description: "Delicious and diverse cuisine from Southern India",
    image: "https://media.istockphoto.com/id/1292563627/photo/assorted-south-indian-breakfast-foods-on-wooden-background-ghee-dosa-uttappam-medhu-vada.jpg?s=612x612&w=0&k=20&c=HvuYT3RiWj5YsvP2_pJrSWIcZUXhnTKqjKhdN3j_SgY="
  }
];

const seedCuisine = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Clear existing cuisine data
    await Cuisine.deleteMany({});

    // Seed Cuisines
    const seededCuisines = await Cuisine.create(cuisines);

    console.log('Cuisines seeded successfully');
    console.log('Seeded cuisines:', seededCuisines);

  } catch (error) {
    console.error('Error seeding cuisines:', error);
  } finally {
    await mongoose.disconnect();
  }
};

// Run the seed function
seedCuisine();

module.exports = seedCuisine;