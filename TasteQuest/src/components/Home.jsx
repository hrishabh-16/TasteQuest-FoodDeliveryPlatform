import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

// Dummy Data for food items and cuisines remain the same
const foodItems = [
  {
    _id: "64b7e2d8abc12345def67890",
    name: "Grilled Sandwich",
    description: "A delicious grilled sandwich with cheese, veggies, and sauce.",
    price: 5.99,
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/9/5/c023ada1-b03a-423e-b5b2-67e515aa81a1_3591e39a-1895-40a8-8264-043f8a175a28.jpeg"
  },
  {
    _id: "64b7e3e9abc98765def65432",
    name: "Chicken Burger",
    description: "A juicy chicken burger with lettuce, tomato, and sauce.",
    price: 7.99,
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/9/5/c023ada1-b03a-423e-b5b2-67e515aa81a1_3591e39a-1895-40a8-8264-043f8a175a28.jpeg"
  },
  {
    _id: "64b7e3e9abc98765def65432",
    name: "Chicken Burger",
    description: "A juicy chicken burger with lettuce, tomato, and sauce.",
    price: 7.99,
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/9/5/c023ada1-b03a-423e-b5b2-67e515aa81a1_3591e39a-1895-40a8-8264-043f8a175a28.jpeg"
  },
  {
    _id: "64b7e3e9abc98765def65432",
    name: "Chicken Burger",
    description: "A juicy chicken burger with lettuce, tomato, and sauce.",
    price: 7.99,
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/9/5/c023ada1-b03a-423e-b5b2-67e515aa81a1_3591e39a-1895-40a8-8264-043f8a175a28.jpeg"
  },
  {
    _id: "64b7e3e9abc98765def65432",
    name: "Chicken Burger",
    description: "A juicy chicken burger with lettuce, tomato, and sauce.",
    price: 7.99,
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/9/5/c023ada1-b03a-423e-b5b2-67e515aa81a1_3591e39a-1895-40a8-8264-043f8a175a28.jpeg"
  },
  {
    _id: "64b7e3e9abc98765def65432",
    name: "Chicken Burger",
    description: "A juicy chicken burger with lettuce, tomato, and sauce.",
    price: 7.99,
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/9/5/c023ada1-b03a-423e-b5b2-67e515aa81a1_3591e39a-1895-40a8-8264-043f8a175a28.jpeg"
  },
  {
    _id: "64b7e3e9abc98765def65432",
    name: "Chicken Burger",
    description: "A juicy chicken burger with lettuce, tomato, and sauce.",
    price: 7.99,
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/9/5/c023ada1-b03a-423e-b5b2-67e515aa81a1_3591e39a-1895-40a8-8264-043f8a175a28.jpeg"
  },
  {
    _id: "64b7e3e9abc98765def65432",
    name: "Chicken Burger",
    description: "A juicy chicken burger with lettuce, tomato, and sauce.",
    price: 7.99,
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/9/5/c023ada1-b03a-423e-b5b2-67e515aa81a1_3591e39a-1895-40a8-8264-043f8a175a28.jpeg"
  }
];

const cuisines = [
  {
    name: "Mexican Cuisine",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png"
  },
  {
    name: "Indian Cuisine",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png"
  },
  {
    name: "Italian Cuisine",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png"
  },
  {
    name: "American Cuisine",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png"
  },
  {
    name: "Chinese Cuisine",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png"
  },
  {
    name: "Thai Cuisine",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png"
  }
];


const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="bg-background min-h-screen font-roboto">
      {/* Welcome message */}
      <div className="text-center py-10">
        <h1 className="text-3xl font-nunito font-bold text-primary">Welcome to TasteQuest</h1>
        <p className="text-lg text-gray-600">Your ultimate food ordering platform</p>
        {user ? (
          <p className="text-lg text-secondary mt-4">Welcome back, {user.email}!</p>
        ) : (
          <p className="text-lg text-gray-600 mt-4">Please log in or register to start ordering.</p>
        )}
      </div>

      {/* Cuisine Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-nunito font-bold text-primary mb-6">Explore Cuisines</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {cuisines.map((cuisine) => (
            <div
              key={cuisine.name}
              className="bg-white p-6 rounded-lg shadow-lg hover:bg-primary transition-all duration-300 cursor-pointer text-center"
            >
              <img src={cuisine.image} alt={cuisine.name} className="w-full h-32 object-cover rounded-md mb-4" />
              <span className="text-lg font-bold text-gray-800">{cuisine.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Food Items Section */}
      <section className="container mx-auto mt-8 px-4">
        <h2 className="text-3xl font-nunito font-bold text-primary mb-6">Our Dishes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {foodItems.map((item) => (
            <div key={item._id} className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-all duration-300">
              <img src={item.image} alt={item.name} className="rounded-t-lg w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold text-primary">{item.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                <p className="text-primary font-bold">${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;





// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';
// import { FiShoppingCart, FiUser, FiSearch } from 'react-icons/fi';

// // Dummy Data for food items
// const foodItems = [
//   {
//     _id: "64b7e2d8abc12345def67890",
//     name: "Grilled Sandwich",
//     description: "A delicious grilled sandwich with cheese, veggies, and sauce.",
//     price: 5.99,
//     image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/9/5/c023ada1-b03a-423e-b5b2-67e515aa81a1_3591e39a-1895-40a8-8264-043f8a175a28.jpeg"
//   },
//   {
//     _id: "64b7e3e9abc98765def65432",
//     name: "Chicken Burger",
//     description: "A juicy chicken burger with lettuce, tomato, and sauce.",
//     price: 7.99,
//     image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/9/5/c023ada1-b03a-423e-b5b2-67e515aa81a1_3591e39a-1895-40a8-8264-043f8a175a28.jpeg"
//   },
//   {
//     _id: "64b7e3e9abc98765def65432",
//     name: "Chicken Burger",
//     description: "A juicy chicken burger with lettuce, tomato, and sauce.",
//     price: 7.99,
//     image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/9/5/c023ada1-b03a-423e-b5b2-67e515aa81a1_3591e39a-1895-40a8-8264-043f8a175a28.jpeg"
//   },
//   {
//     _id: "64b7e3e9abc98765def65432",
//     name: "Chicken Burger",
//     description: "A juicy chicken burger with lettuce, tomato, and sauce.",
//     price: 7.99,
//     image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/9/5/c023ada1-b03a-423e-b5b2-67e515aa81a1_3591e39a-1895-40a8-8264-043f8a175a28.jpeg"
//   },
//   {
//     _id: "64b7e3e9abc98765def65432",
//     name: "Chicken Burger",
//     description: "A juicy chicken burger with lettuce, tomato, and sauce.",
//     price: 7.99,
//     image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/9/5/c023ada1-b03a-423e-b5b2-67e515aa81a1_3591e39a-1895-40a8-8264-043f8a175a28.jpeg"
//   },
//   {
//     _id: "64b7e3e9abc98765def65432",
//     name: "Chicken Burger",
//     description: "A juicy chicken burger with lettuce, tomato, and sauce.",
//     price: 7.99,
//     image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/9/5/c023ada1-b03a-423e-b5b2-67e515aa81a1_3591e39a-1895-40a8-8264-043f8a175a28.jpeg"
//   },
//   {
//     _id: "64b7e3e9abc98765def65432",
//     name: "Chicken Burger",
//     description: "A juicy chicken burger with lettuce, tomato, and sauce.",
//     price: 7.99,
//     image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/9/5/c023ada1-b03a-423e-b5b2-67e515aa81a1_3591e39a-1895-40a8-8264-043f8a175a28.jpeg"
//   },
//   {
//     _id: "64b7e3e9abc98765def65432",
//     name: "Chicken Burger",
//     description: "A juicy chicken burger with lettuce, tomato, and sauce.",
//     price: 7.99,
//     image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/9/5/c023ada1-b03a-423e-b5b2-67e515aa81a1_3591e39a-1895-40a8-8264-043f8a175a28.jpeg"
//   }
// ];

// const cuisines = [
//   {
//     name: "Mexican Cuisine",
//     image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png"
//   },
//   {
//     name: "Indian Cuisine",
//     image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png"
//   },
//   {
//     name: "Italian Cuisine",
//     image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png"
//   },
//   {
//     name: "American Cuisine",
//     image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png"
//   },
//   {
//     name: "Chinese Cuisine",
//     image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png"
//   },
//   {
//     name: "Thai Cuisine",
//     image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png"
//   }
// ];

// const Home = () => {
//   const { user, logout } = useContext(AuthContext);

//   return (
//     <div className="bg-background min-h-screen font-roboto">
//       {/* Navbar */}
//       <nav className="bg-primary text-white py-4 shadow-md">
//         <div className="container mx-auto flex justify-between items-center px-4">
//           <h1 className="text-2xl font-bold">TasteQuest</h1>
//           <div className="flex space-x-4">
//             <a href="#" className="flex items-center">
//               <FiSearch className="mr-2" /> Search
//             </a>
//             {user ? (
//               <div className="flex items-center space-x-4">
//                 <span className="text-sm">{user.email}</span>
//                 <button onClick={logout} className="bg-secondary text-white px-4 py-2 rounded-md">
//                   Logout
//                 </button>
//               </div>
//             ) : (
//               <>
//                 <Link to="/login" className="flex items-center">
//                   <FiUser className="mr-2" /> Login
//                 </Link>
//                 <Link to="/register" className="flex items-center">
//                   <FiUser className="mr-2" /> Register
//                 </Link>
//               </>
//             )}
//             <a href="#" className="flex items-center">
//               <FiShoppingCart className="mr-2" /> Cart
//             </a>
//             <a href="#" className="flex items-center">
//               Contact
//             </a>
//           </div>
//         </div>
//       </nav>

//       {/* Welcome message */}
//       <div className="text-center py-10">
//         <h1 className="text-3xl font-nunito font-bold text-primary">Welcome to TasteQuest</h1>
//         <p className="text-lg text-gray-600">Your ultimate food ordering platform</p>
//         {user ? (
//           <p className="text-lg text-secondary mt-4">Welcome back, {user.email}!</p>
//         ) : (
//           <p className="text-lg text-gray-600 mt-4">Please log in or register to start ordering.</p>
//         )}
//       </div>

//       {/* Cuisine Section */}
//       <section className="container mx-auto px-4">
//         <h2 className="text-3xl font-nunito font-bold text-primary mb-6">Explore Cuisines</h2>
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//           {cuisines.map((cuisine) => (
//             <div
//               key={cuisine.name}
//               className="bg-white p-6 rounded-lg shadow-lg hover:bg-primary transition-all duration-300 cursor-pointer text-center"
//             >
//               <img src={cuisine.image} alt={cuisine.name} className="w-full h-32 object-cover rounded-md mb-4" />
//               <span className="text-lg font-bold text-gray-800">{cuisine.name}</span>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Food Items Section */}
//       <section className="container mx-auto mt-8 px-4">
//         <h2 className="text-3xl font-nunito font-bold text-primary mb-6">Our Dishes</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {foodItems.map((item) => (
//             <div key={item._id} className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-all duration-300">
//               <img src={item.image} alt={item.name} className="rounded-t-lg w-full h-48 object-cover" />
//               <div className="p-4">
//                 <h3 className="text-lg font-bold text-primary">{item.name}</h3>
//                 <p className="text-sm text-gray-600 mb-2">{item.description}</p>
//                 <p className="text-primary font-bold">${item.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;
