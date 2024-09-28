import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiUser, FiSearch } from 'react-icons/fi';

const Navbar = ({ user, logout }) => {
  return (
    <nav className="bg-primary text-white py-4 shadow-md">
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
  );
};

export default Navbar;
