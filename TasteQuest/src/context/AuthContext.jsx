// import React, { createContext, useContext, useState, useEffect } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Remove the SERVER_URL and baseURL setting
//   // axios will use the relative URLs, which will be handled by the proxy

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//       checkAuthStatus();
//     } else {
//       setLoading(false);
//     }
//   }, []);

//   const checkAuthStatus = async () => {
//     try {
//       const response = await axios.get('/api/auth/user');
//       setUser(response.data);
//     } catch (error) {
//       console.error('Error checking auth status:', error);
//       localStorage.removeItem('token');
//       delete axios.defaults.headers.common['Authorization'];
//     } finally {
//       setLoading(false);
//     }
//   };

//   const login = async (email, password) => {
//     try {
//       const response = await axios.post('/api/auth/login', { email, password });
//       const { token, user } = response.data;
//       localStorage.setItem('token', token);
//       axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//       setUser(user);
//       toast.success('Logged in successfully');
//       return true;
//     } catch (error) {
//       console.error('Login error:', error.response?.data?.message || error.message);
//       toast.error(error.response?.data?.message || 'An error occurred during login');
//       return false;
//     }
//   };

//   const register = async (email, password) => {
//     try {
//       const response = await axios.post('/api/auth/register', { email, password });
//       const { token, user } = response.data;
//       localStorage.setItem('token', token);
//       axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//       setUser(user);
//       toast.success('Registered successfully');
//       return true;
//     } catch (error) {
//       console.error('Registration error:', error.response?.data?.message || error.message);
//       toast.error(error.response?.data?.message || 'An error occurred during registration');
//       return false;
//     }
//   };

//   const logout = () => {
//     localStorage.removeItem('token');
//     delete axios.defaults.headers.common['Authorization'];
//     setUser(null);
//     toast.info('Logged out successfully');
//   };

//   return (
//     <AuthContext.Provider value={{ user, loading, login, register, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export { AuthContext };



import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate= useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      checkAuthStatus();
    } else {
      setLoading(false);
    }
  }, []);

  const checkAuthStatus = async () => {
    try {
      const response = await axios.get('/api/auth/user');
      setUser(response.data);
    } catch (error) {
      console.error('Error checking auth status:', error);
      localStorage.removeItem('token');
      delete axios.defaults.headers.common['Authorization'];
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      const response = await axios.post('/api/auth/login', { email, password });
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setUser(user);
      toast.success('Logged in successfully');
      return true;
    } catch (error) {
      console.error('Login error:', error.response?.data?.message || error.message);
      toast.error(error.response?.data?.message || 'An error occurred during login');
      return false;
    }
  };

  const register = async (email, password) => {
    try {
      const response = await axios.post('/api/auth/register', { email, password });
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setUser(user);
      toast.success('Registered successfully');
      return true;
    } catch (error) {
      console.error('Registration error:', error.response?.data?.message || error.message);
      toast.error(error.response?.data?.message || 'An error occurred during registration');
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
    setUser(null);
    toast.info('Logged out successfully');
    navigate("/");
  };

  const handleGoogleSignIn = async (credentialResponse) => {
    try {
      const decoded = jwt_decode(credentialResponse.credential);
      const { email, name, picture } = decoded;
      
      // Send the Google token to your backend for verification and user creation/login
      const response = await axios.post('/api/auth/google', { token: credentialResponse.credential });
      
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setUser(user);
      toast.success('Logged in with Google successfully');
      return true;
    } catch (error) {
      console.error('Google Sign-In error:', error.response?.data?.message || error.message);
      toast.error(error.response?.data?.message || 'An error occurred during Google Sign-In');
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, handleGoogleSignIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };

// import React, { createContext, useContext, useState, useEffect } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Set base URL for Axios from environment variable
//   const SERVER_URL = 'http://localhost:6000';
//   axios.defaults.baseURL = SERVER_URL;

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//       checkAuthStatus();
//     } else {
//       setLoading(false);
//     }
//   }, []);

//   const checkAuthStatus = async () => {
//     try {
//       const response = await axios.get('/api/auth/user');
//       if (response.status === 200) {
//         setUser(response.data);
//       } else {
//         setUser(null);
//       }
//     } catch (error) {
//       console.error('Error checking auth status:', error);
//       setUser(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const login = async (email, password) => {
//     try {
//       const response = await axios.post('/api/auth/login', { email, password });
//       if (response.data.token) {
//         localStorage.setItem('token', response.data.token);
//         axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
//         setUser(response.data.user);
//         toast.success('Logged in successfully');
//       } else {
//         toast.error('Invalid credentials');
//       }
//     } catch (error) {
//       console.error('Login error:', error.response?.data || error.message);
//       toast.error('An error occurred during login. Please try again.');
//     }
//   };

//   const register = async (email, password) => {
//     try {
//       const response = await axios.post('/api/auth/register', { email, password });
//       if (response.data.token) {
//         localStorage.setItem('token', response.data.token);
//         axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
//         setUser(response.data.user);
//         toast.success('Registered successfully');
//       } else {
//         toast.error('Registration failed. Please try again.');
//       }
//     } catch (error) {
//       console.error('Registration error:', error.response?.data || error.message);
//       toast.error('An error occurred during registration. Please try again.');
//     }
//   };

//   const logout = async () => {
//     try {
//       await axios.post('/api/auth/logout');
//       localStorage.removeItem('token');
//       delete axios.defaults.headers.common['Authorization'];
//       setUser(null);
//       toast.info('Logged out successfully');
//     } catch (error) {
//       console.error('Error during logout:', error);
//       toast.error('An error occurred during logout. Please try again.');
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ user, loading, login, register, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export { AuthContext };




// // import React, { createContext, useContext, useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { toast } from 'react-toastify';

// // const AuthContext = createContext();

// // export const useAuth = () => useContext(AuthContext);

// // export const AuthProvider = ({ children }) => {
// //   const [user, setUser] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const token = localStorage.getItem('token');
// //     if (token) {
// //       axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
// //       checkAuthStatus();
// //     } else {
// //       setLoading(false);
// //     }
// //   }, []);

// //   const checkAuthStatus = async () => {
// //     try {
// //       const response = await axios.get('/api/auth/user');
// //       if (response.status === 200) {
// //         setUser(response.data);
// //       } else {
// //         setUser(null);
// //       }
// //     } catch (error) {
// //       console.error('Error checking auth status:', error);
// //       setUser(null);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const login = async (email, password) => {
// //     try {
// //       const response = await axios.post('/api/auth/login', { email, password });
// //       if (response.data.token) {
// //         localStorage.setItem('token', response.data.token);
// //         axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
// //         setUser(response.data.user);
// //         toast.success('Logged in successfully');
// //       } else {
// //         toast.error('Invalid credentials');
// //       }
// //     } catch (error) {
// //       console.error('Login error:', error.response?.data || error.message);
// //       toast.error('An error occurred during login. Please try again.');
// //     }
// //   };

// //   const register = async (email, password) => {
// //     try {
// //       const response = await axios.post('/api/auth/register', { email, password });
// //       if (response.data.token) {
// //         localStorage.setItem('token', response.data.token);
// //         axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
// //         setUser(response.data.user);
// //         toast.success('Registered successfully');
// //       } else {
// //         toast.error('Registration failed. Please try again.');
// //       }
// //     } catch (error) {
// //       console.error('Registration error:', error.response?.data || error.message);
// //       toast.error('An error occurred during registration. Please try again.');
// //     }
// //   };

// //   const logout = async () => {
// //     try {
// //       await axios.post('/api/auth/logout');
// //       localStorage.removeItem('token');
// //       delete axios.defaults.headers.common['Authorization'];
// //       setUser(null);
// //       toast.info('Logged out successfully');
// //     } catch (error) {
// //       console.error('Error during logout:', error);
// //       toast.error('An error occurred during logout. Please try again.');
// //     }
// //   };

// //   return (
// //     <AuthContext.Provider value={{ user, loading, login, register, logout }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };
// // export { AuthContext };