import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { FiShoppingCart, FiUser, FiSearch } from 'react-icons/fi';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Inventory from './components/Inventory';
import Cart from './components/Cart';
import ContactPage from './components/contact-page';
import { AuthProvider, AuthContext } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Navbar from './components/Navbar';
import SearchResults from './components/SearchResults';
import Profile from './components/Profile';
import Orders from './components/Orders';


function AppContent() {

  return (
    <div className="font-roboto min-h-screen bg-background">
      {/* Navbar */}
      <Navbar />

      <main className="container mx-auto mt-8 px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<SearchResults />} />  {/* Add this route */}
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



