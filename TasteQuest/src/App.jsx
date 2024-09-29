import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Inventory from './components/Inventory';
import Cart from './components/Cart';
import ContactPage from './components/contact-page';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Navbar from './components/Navbar';
import SearchResults from './components/SearchResults';
import Profile from './components/Profile';
import Orders from './components/Orders';

function AppContent() {
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
  
  return (
    <div className="font-roboto min-h-screen bg-background">
      {/* Navbar */}
      <Navbar />

      <main className="container mx-auto mt-8 px-4">
        <Routes>
          <Route path="/" element={<Home cuisines={cuisines} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <ToastContainer position="bottom-right" autoClose={5000} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <GoogleOAuthProvider clientId="171194344199-uhefr29aar1labtid6ns9l6hho7gv5p7.apps.googleusercontent.com">
        <AuthProvider>
          <CartProvider>
            <AppContent />
          </CartProvider>
        </AuthProvider>
      </GoogleOAuthProvider>
    </Router>
  );
}

export default App;
















// // import { ToastContainer } from 'react-toastify';
// // import React from 'react';
// // import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Use Routes instead of Switch
// // import Home from './components/Home';
// // import Login from './components/Login';
// // import Register from './components/Register';
// // import { AuthProvider } from './context/AuthContext';

// // function App() {
// //   return (
// //     <AuthProvider>
// //       <Router>
// //         <div style={styles.app}>
// //           <nav style={styles.nav}>
// //             <Link to="/" style={styles.navLink}>Home</Link>
// //             <Link to="/login" style={styles.navLink}>Login</Link>
// //             <Link to="/register" style={styles.navLink}>Register</Link>
// //           </nav>
// //           <Routes>
// //             <Route path="/" element={<Home />} /> {/* Use element prop */}
// //             <Route path="/login" element={<Login />} />
// //             <Route path="/register" element={<Register />} />
// //           </Routes>
// //         </div>
// //       </Router>
// //     </AuthProvider>
// //   );
// // }

// // const styles = {
// //   app: {
// //     fontFamily: 'Arial, sans-serif',
// //   },
// //   nav: {
// //     background: '#333',
// //     padding: '10px',
// //     marginBottom: '20px',
// //   },
// //   navLink: {
// //     color: '#fff',
// //     textDecoration: 'none',
// //     margin: '0 10px',
// //   },
// // };

// // export default App;






// import React from 'react';
// import { ToastContainer } from 'react-toastify'; // Preserved ToastContainer
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Home from './components/Home';
// import Login from './components/Login';
// import Register from './components/Register';
// import Inventory from './components/Inventory';
// import Cart from './components/Cart';
// import { AuthProvider } from './context/AuthContext';
// import { CartProvider } from './context/CartContext'; // Added CartProvider for managing cart state
// import 'react-toastify/dist/ReactToastify.css'; // Toast styles

// function App() {
//   return (
//     <AuthProvider>
//       <CartProvider> {/* Cart context added */}
//         <Router>
//           <div className="font-roboto min-h-screen bg-gray-100"> {/* Consistent font and background */}
//             <nav className="bg-orange-500 text-white py-4"> {/* Updated Tailwind color to match Swiggy theme */}
//               <div className="container mx-auto flex justify-between items-center px-4">
//                 <h1 className="text-2xl font-bold">TasteQuest</h1> {/* Brand Name */}
//                 <div className="space-x-4"> {/* Navbar links */}
//                   <Link to="/" className="hover:underline">Home</Link>
//                   <Link to="/login" className="hover:underline">Login</Link>
//                   <Link to="/register" className="hover:underline">Register</Link>
//                   <Link to="/inventory" className="hover:underline">Inventory</Link>
//                   <Link to="/cart" className="hover:underline">Cart</Link> {/* Cart Link */}
//                 </div>
//               </div>
//             </nav>

//             <main className="container mx-auto mt-8 px-4">
//               <Routes>
//                 <Route path="/" element={<Home />} /> {/* Home Route */}
//                 <Route path="/login" element={<Login />} /> {/* Login Route */}
//                 <Route path="/register" element={<Register />} /> {/* Register Route */}
//                 <Route path="/inventory" element={<Inventory />} /> {/* Inventory Route */}
//                 <Route path="/cart" element={<Cart />} /> {/* Cart Route */}
//               </Routes>
//             </main>

//             <ToastContainer position="bottom-right" autoClose={5000} /> {/* Toast notifications */}
//           </div>
//         </Router>
//       </CartProvider>
//     </AuthProvider>
//   );
// }

// export default App;



