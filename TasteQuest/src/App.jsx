import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Use Routes instead of Switch
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div style={styles.app}>
          <nav style={styles.nav}>
            <Link to="/" style={styles.navLink}>Home</Link>
            <Link to="/login" style={styles.navLink}>Login</Link>
            <Link to="/register" style={styles.navLink}>Register</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} /> {/* Use element prop */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

const styles = {
  app: {
    fontFamily: 'Arial, sans-serif',
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
