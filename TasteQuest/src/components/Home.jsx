import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Home = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to TasteQuest</h1>
      <p style={styles.subtitle}>Your ultimate food ordering platform</p>
      
      {user ? (
        <div>
          <p style={styles.welcomeMessage}>Welcome back, {user.email}!</p>
          <button onClick={logout} style={styles.button}>Logout</button>
        </div>
      ) : (
        <div>
          <p style={styles.message}>Please log in or register to start ordering.</p>
          <Link to="/login" style={styles.button}>Login</Link>
          <Link to="/register" style={styles.button}>Register</Link>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '2.5em',
    color: '#333',
  },
  subtitle: {
    fontSize: '1.2em',
    color: '#666',
    marginBottom: '20px',
  },
  welcomeMessage: {
    fontSize: '1.2em',
    color: '#4CAF50',
    marginBottom: '20px',
  },
  message: {
    fontSize: '1.1em',
    color: '#666',
    marginBottom: '20px',
  },
  button: {
    display: 'inline-block',
    margin: '10px',
    padding: '10px 20px',
    fontSize: '1em',
    color: '#fff',
    backgroundColor: '#4CAF50',
    textDecoration: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Home;