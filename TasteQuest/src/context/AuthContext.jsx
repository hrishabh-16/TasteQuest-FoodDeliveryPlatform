import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      console.log('Token found in localStorage');
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      fetchUser();
    } else {
      console.log('No token found in localStorage');
      setLoading(false);
    }
  }, []);

  const fetchUser = async () => {
    try {
      console.log('Fetching user data...');
      const res = await axios.get('http://localhost:5002/api/auth/user');
      console.log('User data received:', res.data);
      setUser(res.data);
    } catch (error) {
      console.error('Error fetching user:', error.response?.data || error.message);
      logout(); // Clear invalid token
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      console.log('Attempting login...');
      const res = await axios.post('http://localhost:5002/api/auth/login', { email, password });
      console.log('Login response:', res.data);
      localStorage.setItem('token', res.data.token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
      await fetchUser();
      return res.data;
    } catch (error) {
      console.error('Login error:', error.response?.data || error.message);
      throw error.response ? error.response.data : error;
    }
  };

  const register = async (email, password) => {
    try {
      console.log('Attempting registration...');
      const res = await axios.post('http://localhost:5002/api/auth/register', { email, password });
      console.log('Registration response:', res.data);
      localStorage.setItem('token', res.data.token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
      await fetchUser();
      return res.data;
    } catch (error) {
      console.error('Registration error:', error.response?.data || error.message);
      throw error.response ? error.response.data : error;
    }
  };

  const logout = () => {
    console.log('Logging out...');
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};