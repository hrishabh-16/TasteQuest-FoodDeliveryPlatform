import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import CuisineCard from './CuisineCard';
import FoodItemCard from './FoodItemCard';


const Home = () => {
  const { user } = useContext(AuthContext);
  
  const [foodItems, setFoodItems] = useState([]);
  const [cuisines, setCuisines] = useState([]);

  const fetchAllItems = async () => {
    try {
      const response = await axios.get('/api/items');
      if (response.status === 200) {
        setFoodItems(response.data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const fetchCuisines = async () => {
    try {
      const response = await axios.get('/api/categories');
      if (response.status === 200) {
        setCuisines(response.data); 
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchAllItems();
    fetchCuisines(); 
  }, []);

  return (
    <div className="bg-background min-h-screen font-roboto">
      {/* Welcome message */}
      <div className="text-center py-10">
        <h1 className="text-3xl font-nunito font-bold text-primary">Welcome to TasteQuest</h1>
        <p className="text-lg text-gray-600">Your ultimate food ordering platform</p>
        {user ? (
          <p className="text-lg text-secondary mt-4">Welcome back, {user.email}!</p>
        ) : (
          <p className="text-lg text-gray-600 mt-4">Please log in or register to start ordering.</p>
        )}
      </div>

      {/* Cuisine Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-nunito font-bold text-primary mb-6">Explore Cuisines</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {cuisines.map((cuisine) => (
          <CuisineCard key={cuisine.name} cuisine={cuisine} /> 
          ))}
        </div>
      </section>

      {/* Food Items Section */}
      <section className="container mx-auto mt-8 px-4">
        <h2 className="text-3xl font-nunito font-bold text-primary mb-6">Our Dishes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {foodItems.map((item) => (
            <FoodItemCard key={item._id} item={item} /> 
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
