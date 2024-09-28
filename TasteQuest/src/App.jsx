import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { FiShoppingCart, FiUser, FiSearch } from 'react-icons/fi';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Inventory from './components/Inventory';
import Cart from './components/Cart';
import { AuthProvider, AuthContext } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import 'react-toastify/dist/ReactToastify.css';

function AppContent() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="font-roboto min-h-screen bg-background">
      {/* Navbar */}
      <nav className="bg-primary sticky top-0 z-50 text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          <Link to="/" className="text-2xl font-bold">TasteQuest</Link>
          <div className="flex space-x-4">
            <Link to="/search" className="flex items-center">
              <FiSearch className="mr-2" /> Search
            </Link>
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm">{user.email}</span>
                <button onClick={logout} className="bg-secondary text-white px-4 py-2 rounded-md">
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link to="/login" className="flex items-center">
                  <FiUser className="mr-2" /> Login
                </Link>
                <Link to="/register" className="flex items-center">
                  <FiUser className="mr-2" /> Register
                </Link>
              </>
            )}
            <Link to="/cart" className="flex items-center">
              <FiShoppingCart className="mr-2" /> Cart
            </Link>
            <Link to="/contact" className="flex items-center">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto mt-8 px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>

      <ToastContainer position="bottom-right" autoClose={5000} />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <AppContent />
        </Router>
      </CartProvider>
    </AuthProvider>
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



