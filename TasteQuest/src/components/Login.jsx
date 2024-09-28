import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Login form submitted');
      await login(email, password);
      console.log('Login successful');
      toast.success('Logged in successfully');
      navigate('/');
    } catch (error) {
      console.error('Login error in component:', error);
      toast.error(error.message || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-login-bg bg-cover">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-custom">
        <h2 className="text-3xl font-nunito text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Enter Email Id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 border rounded-md"
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 border rounded-md"
          />
          <button type="submit" className="w-full bg-primary text-white py-3 rounded-md">Login</button>
        </form>
        <div className="text-center mt-4 text-sm">
          <span>Don't have an account? </span>
          <a href="/register" className="text-primary">Signup</a>
        </div>
        <div className="flex justify-center items-center mt-4">
          <hr className="flex-1" />
          <span className="px-2 text-secondary">OR</span>
          <hr className="flex-1" />
        </div>
        <div className="flex justify-between mt-4">
          <button className="flex items-center justify-center w-full bg-google text-white py-3 rounded-md mr-2">
            <img src="/images/google-icon.png" alt="Google" className="w-5 h-5 mr-2" />
            Continue with Google
          </button>
          <button className="flex items-center justify-center w-full bg-facebook text-white py-3 rounded-md ml-2">
            <img src="/images/facebook-icon.png" alt="Facebook" className="w-5 h-5 mr-2" />
            Continue with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
