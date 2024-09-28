// import { ToastContainer } from 'react-toastify';
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Use Routes instead of Switch
// import Home from './components/Home';
// import Login from './components/Login';
// import Register from './components/Register';
// import { AuthProvider } from './context/AuthContext';

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <div style={styles.app}>
//           <nav style={styles.nav}>
//             <Link to="/" style={styles.navLink}>Home</Link>
//             <Link to="/login" style={styles.navLink}>Login</Link>
//             <Link to="/register" style={styles.navLink}>Register</Link>
//           </nav>
//           <Routes>
//             <Route path="/" element={<Home />} /> {/* Use element prop */}
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//           </Routes>
//         </div>
//       </Router>
//     </AuthProvider>
//   );
// }

// const styles = {
//   app: {
//     fontFamily: 'Arial, sans-serif',
//   },
//   nav: {
//     background: '#333',
//     padding: '10px',
//     marginBottom: '20px',
//   },
//   navLink: {
//     color: '#fff',
//     textDecoration: 'none',
//     margin: '0 10px',
//   },
// };

// export default App;






import React from 'react';
import { ToastContainer } from 'react-toastify'; // Added from the first version
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Inventory from './components/Inventory'; // Added Inventory component
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="font-roboto" style={styles.app}> {/* Combined class-based styling and inline styling */}
          <nav className="bg-primary text-white py-4" style={styles.nav}>
            <div className="container mx-auto flex justify-between items-center px-4">
              <h1 className="text-2xl font-bold">TasteQuest</h1>
              <div className="space-x-4">
                <Link to="/" className="hover:underline" style={styles.navLink}>Home</Link>
                <Link to="/login" className="hover:underline" style={styles.navLink}>Login</Link>
                <Link to="/register" className="hover:underline" style={styles.navLink}>Register</Link>
                <Link to="/inventory" className="hover:underline" style={styles.navLink}>Inventory</Link> {/* Added Inventory link */}
              </div>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/inventory" element={<Inventory />} /> {/* Added Inventory route */}
          </Routes>
        </div>
        <ToastContainer /> {/* ToastContainer added from the first version */}
      </Router>
    </AuthProvider>
  );
}

const styles = {
  app: {
    fontFamily: 'Arial, sans-serif', // Preserved the inline style for font
  },
  nav: {
    background: '#333',
    padding: '10px',
    marginBottom: '20px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    margin: '0 10px',
  },
};

export default App;

