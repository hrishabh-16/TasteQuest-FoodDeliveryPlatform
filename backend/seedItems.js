const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGODB_URI; // Replace with your MongoDB connection string
const dbName = 'test'; // Replace with your database name

const menuItems = [
    {
        "inStock": true,
        "quantity": 100,
        // "_id": "66f77b48d23ce42ccc913418",
        "name": "Paneer Butter Masala",
        "description": "Paneer cooked in a creamy tomato sauce",
        "price": 250,
        "category": "Main Course",
        "cuisine": "Indian",
        "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/jodq0fyqrf056qpz7ope",
        "createdAt": "2024-09-28T04:10:00.024Z",
        "updatedAt": "2024-09-28T04:10:00.024Z",
        "__v": 0,
        "veg": true,
        "rating": 4.5
    },
    {
        "inStock": true,
        "quantity": 80,
        // "_id": "66f77b48d23ce42ccc913419",
        "name": "Chicken Biryani",
        "description": "Aromatic basmati rice cooked with tender chicken pieces and spices",
        "price": 200,
        "category": "Main Course",
        "cuisine": "Indian",
        "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/3/27/f7b40722-e97a-4dd6-ae4f-5c9c5c1e99f2_b113fd6d-e778-4ef2-949a-5f66a13ce7ec.jpg",
        "createdAt": "2024-09-28T04:11:00.024Z",
        "updatedAt": "2024-09-28T04:11:00.024Z",
        "__v": 0,
        "veg": false,
        "rating": 4.7
    },
    {
        "inStock": true,
        "quantity": 120,
        // "_id": "66f77b48d23ce42ccc913420",
        "name": "Veg Hakka Noodles",
        "description": "Stir-fried noodles with vegetables, flavored with soy sauce and garlic",
        "price": 180,
        "category": "Appetizer",
        "cuisine": "Chinese",
        "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/e7c10d086c50116a918b93bf82467beb",
        "createdAt": "2024-09-28T04:12:00.024Z",
        "updatedAt": "2024-09-28T04:12:00.024Z",
        "__v": 0,
        "veg": true,
        "rating": 4.2
    },
    {
        "inStock": true,
        "quantity": 60,
        // "_id": "66f77b48d23ce42ccc913421",
        "name": "Margherita Pizza",
        "description": "Classic cheese pizza with a thin crust and tomato sauce",
        "price": 300,
        "category": "Main Course",
        "cuisine": "Italian",
        "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/dpventcrozvfni0lqb10",
        "createdAt": "2024-09-28T04:13:00.024Z",
        "updatedAt": "2024-09-28T04:13:00.024Z",
        "__v": 0,
        "veg": true,
        "rating": 4.3
    },
    {
        "inStock": true,
        "quantity": 110,
        // "_id": "66f77b48d23ce42ccc913423",
        "name": "Sushi",
        "description": "Japanese dish with vinegared rice and seafood",
        "price": 350,
        "category": "Appetizer",
        "cuisine": "Japanese",
        "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/4/1/6b9a7a61-76c8-4c19-993d-c7a9a13b154e_594b90b3-386c-4cf9-b3ff-9bbb29f9c9d6.jpeg",
        "createdAt": "2024-09-28T04:15:00.024Z",
        "updatedAt": "2024-09-28T04:15:00.024Z",
        "__v": 0,
        "veg": false,
        "rating": 4.6
    },
    {
        "inStock": true,
        "quantity": 90,
        // "_id": "66f77b48d23ce42ccc913422",
        "name": "Dosa",
        "description": "Crispy fermented rice pancake served with chutney and sambar",
        "price": 100,
        "category": "Main Course",
        "cuisine": "Indian",
        "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/3/11/d76e6ee8-3f02-4903-bd4c-559f660d6183_28dbc632-4666-4f3f-a261-e4cced684c4d.jpg_compressed",
        "createdAt": "2024-09-28T04:14:00.024Z",
        "updatedAt": "2024-09-28T04:14:00.024Z",
        "__v": 0,
        "veg": true,
        "rating": 4.4
    },
    {
        "inStock": true,
        "quantity": 50,
        // "_id": "66f77b48d23ce42ccc913424",
        "name": "Momos",
        "description": "Steamed dumplings stuffed with vegetables or meat",
        "price": 120,
        "category": "Appetizer",
        "cuisine": "Chinese",
        "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/ca7i49vwxg7ic183ez5m",
        "createdAt": "2024-09-28T04:16:00.024Z",
        "updatedAt": "2024-09-28T04:16:00.024Z",
        "__v": 0,
        "veg": true,
        "rating": 4.1
    },
    {
        "inStock": true,
        "quantity": 75,
        // "_id": "66f77b48d23ce42ccc913425",
        "name": "Rajma Chawal",
        "description": "Kidney beans cooked in spices served with steamed rice",
        "price": 150,
        "category": "Main Course",
        "cuisine": "Indian",
        "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/3/11/a92ae39c-d7a9-4d31-893d-9f8c5cc89c1e_9f69fcd4-7fb4-4752-a566-dd48cc5c9dc9.png_compressed",
        "createdAt": "2024-09-28T04:17:00.024Z",
        "updatedAt": "2024-09-28T04:17:00.024Z",
        "__v": 0,
        "veg": true,
        "rating": 4.3
    },
    {
        "inStock": true,
        "quantity": 95,
        // "_id": "66f77b48d23ce42ccc913426",
        "name": "Chole Bhature",
        "description": "Spiced chickpea curry served with deep-fried bread",
        "price": 140,
        "category": "Main Course",
        "cuisine": "Indian",
        "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/piwnymqv6lmknqwgsrid",
        "createdAt": "2024-09-28T04:18:00.024Z",
        "updatedAt": "2024-09-28T04:18:00.024Z",
        "__v": 0,
        "veg": true,
        "rating": 4.5
    },
    {
        "inStock": true,
        "quantity": 85,
        // "_id": "66f77b48d23ce42ccc913427",
        "name": "Spaghetti Aglio e Olio",
        "description": "Spaghetti tossed in olive oil, garlic, and chili flakes",
        "price": 260,
        "category": "Main Course",
        "cuisine": "Italian",
        "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/4/2/spaghetti_aglio_e_olio.jpg",
        "createdAt": "2024-09-28T04:19:00.024Z",
        "updatedAt": "2024-09-28T04:19:00.024Z",
        "__v": 0,
        "veg": true,
        "rating": 4.2
    },
    {
        "inStock": true,
        "quantity": 70,
        // "_id": "66f77b48d23ce42ccc913428",
        "name": "Thai Green Curry",
        "description": "Creamy coconut curry with vegetables and choice of protein",
        "price": 280,
        "category": "Main Course",
        "cuisine": "Thai",
        "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/4/2/thai_green_curry.jpg",
        "createdAt": "2024-09-28T04:20:00.024Z",
        "updatedAt": "2024-09-28T04:20:00.024Z",
        "__v": 0,
        "veg": false,
        "rating": 4.4
    },
    {
        "inStock": true,
        "quantity": 65,
        // "_id": "66f77b48d23ce42ccc913429",
        "name": "Falafel Wrap",
        "description": "Crispy chickpea fritters wrapped in pita with tahini sauce",
        "price": 180,
        "category": "Main Course",
        "cuisine": "Middle Eastern",
        "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/4/2/falafel_wrap.jpg",
        "createdAt": "2024-09-28T04:21:00.024Z",
        "updatedAt": "2024-09-28T04:21:00.024Z",
        "__v": 0,
        "veg": true,
        "rating": 4.1
    },
    {
        "inStock": true,
        "quantity": 55,
        // "_id": "66f77b48d23ce42ccc913430",
        "name": "Kung Pao Chicken",
        "description": "Spicy stir-fried chicken with peanuts and vegetables",
        "price": 220,
        "category": "Main Course",
        "cuisine": "Chinese",
        "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/4/2/kung_pao_chicken.jpg",
        "createdAt": "2024-09-28T04:22:00.024Z",
        "updatedAt": "2024-09-28T04:22:00.024Z",
        "__v": 0,
        "veg": false,
        "rating": 4.3
    },
    {
        "inStock": true,
        "quantity": 80,
        // "_id": "66f77b48d23ce42ccc913431",
        "name": "Caesar Salad",
        "description": "Crisp romaine lettuce with croutons and Caesar dressing",
        "price": 160,
        "category": "Appetizer",
        "cuisine": "American",
        "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/4/2/caesar_salad.jpg",
        "createdAt": "2024-09-28T04:23:00.024Z",
        "updatedAt": "2024-09-28T04:23:00.024Z",
        "__v": 0,
        "veg": true,
        "rating": 4.0
    },
    {
        "inStock": true,
        "quantity": 70,
        // "_id": "66f77b48d23ce42ccc913432",
        "name": "Mushroom Risotto",
        "description": "Creamy Arborio rice with sautéed mushrooms and Parmesan",
        "price": 270,
        "category": "Main Course",
        "cuisine": "Italian",
        "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/4/2/mushroom_risotto.jpg",
        "createdAt": "2024-09-28T04:24:00.024Z",
        "updatedAt": "2024-09-28T04:24:00.024Z",
        "__v": 0,
        "veg": true,
        "rating": 4.4
    },
    {
        "inStock": true,
        "quantity": 60,
        // "_id": "66f77b48d23ce42ccc913433",
        "name": "Beef Tacos",
        "description": "Soft corn tortillas filled with seasoned ground beef and toppings",
        "price": 200,
        "category": "Main Course",
        "cuisine": "Mexican",
        "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/4/2/beef_tacos.jpg",
        "createdAt": "2024-09-28T04:25:00.024Z",
        "updatedAt": "2024-09-28T04:25:00.024Z",
        "__v": 0,
        "veg": false,
        "rating": 4.3
    },
    {
        "inStock": true,
        "quantity": 75,
        // "_id": "66f77b48d23ce42ccc913434",
        "name": "Pad Thai",
        "description": "Stir-fried rice noodles with tofu, shrimp, peanuts, and bean sprouts",
        "price": 230,
        "category": "Main Course",
        "cuisine": "Thai",
        "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/4/2/pad_thai.jpg",
        "createdAt": "2024-09-28T04:26:00.024Z",
        "updatedAt": "2024-09-28T04:26:00.024Z",
        "__v": 0,
        "veg": false,
        "rating": 4.5
    },
    {
        "inStock": true,
        "quantity": 85,
        // "_id": "66f77b48d23ce42ccc913435",
        "name": "Greek Salad",
        "description": "Fresh vegetables, feta cheese, and olives with olive oil dressing",
        "price": 170,
        "category": "Appetizer",
        "cuisine": "Greek",
        "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/4/2/greek_salad.jpg",
        "createdAt": "2024-09-28T04:27:00.024Z",
        "updatedAt": "2024-09-28T04:27:00.024Z",
        "__v": 0,
        "veg": true,
        "rating": 4.2
    },
    {
        "inStock": true,
        "quantity": 55,
        // "_id": "66f77b48d23ce42ccc913436",
        "name": "Lamb Kebabs",
        "description": "Grilled marinated lamb skewers served with mint chutney",
        "price": 280,
        "category": "Main Course",
        "cuisine": "Middle Eastern",
        "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/4/2/lamb_kebabs.jpg",
        "createdAt": "2024-09-28T04:28:00.024Z",
        "updatedAt": "2024-09-28T04:28:00.024Z",
        "__v": 0,
        "veg": false,
        "rating": 4.6
    },
    {
        "inStock": true,
        "quantity": 70,
        // "_id": "66f77b48d23ce42ccc913437",
        "name": "Vegetable Tempura",
        "description": "Assorted vegetables deep-fried in a light, crispy batter",
        "price": 190,
        "category": "Appetizer",
        "cuisine": "Japanese",
        "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/4/2/vegetable_tempura.jpg",
        "createdAt": "2024-09-28T04:29:00.024Z",
        "updatedAt": "2024-09-28T04:29:00.024Z",
        "__v": 0,
        "veg": true,
        "rating": 4.1
    }
];

async function seedDatabase() {
    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log('Connected to MongoDB');

        const db = client.db(dbName);
        const collection = db.collection('items');

        // Delete existing documents in the collection
        await collection.deleteMany({});
        console.log('Cleared existing items');

        // Insert new documents
        const result = await collection.insertMany(menuItems);
        console.log(`${result.insertedCount} documents inserted`);
    } catch (err) {
        console.error('Error:', err);
    } finally {
        await client.close();
        console.log('Disconnected from MongoDB');
    }
}

seedDatabase();