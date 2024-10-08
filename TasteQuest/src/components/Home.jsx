import { useContext, useEffect, useState, useCallback } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import CuisineCard from './CuisineCard';
import FoodItemCard from './FoodItemCard';
import Filters from './Filters';

const Home = () => {
  const { user } = useContext(AuthContext);
  
  const [foodItems, setFoodItems] = useState([]);
  const [filteredFoodItems, setFilteredFoodItems] = useState([]);
  const [cuisines, setCuisines] = useState([]);

  const fetchAllItems = async () => {
    try {
      const response = await axios.get('/api/items');
      if (response.status === 200) {
        setFoodItems(response.data);
        setFilteredFoodItems(response.data);
      }
    } catch (error) {
      console.error('Error fetching food items:', error);
    }
  };

  const fetchCuisines = async () => {
    try {
      const response = await axios.get('/api/cuisines');
      if (response.status === 200) {
        setCuisines(response.data);
      }
    } catch (error) {
      console.error('Error fetching cuisines:', error);
    }
  };

  useEffect(() => {
    fetchAllItems();
    fetchCuisines();
  }, []);

  const handleFilterChange = useCallback((filteredItems) => {
    setFilteredFoodItems(filteredItems);
  }, []);

  return (
    <div className="bg-background min-h-screen font-roboto">
      {/* Welcome message */}
      <div className="text-center py-10">
        <h1 className="text-3xl font-nunito font-bold text-primary">Welcome to TasteQuest</h1>
        <p className="text-lg text-gray-600">Your ultimate food ordering platform</p>
        {user ? (
          <p className="text-lg text-primary mt-4">Welcome back, {user.name}!</p>
        ) : (
          <p className="text-lg text-gray-600 mt-4">Please log in or register to start ordering.</p>
        )}
      </div>

      {/* Cuisine Section */}
      <section className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl font-nunito font-bold text-primary mb-6">Explore Cuisines</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Using CuisineCard for displaying cuisines */}
          <CuisineCard cuisineList={cuisines} /> {/* Pass cuisines list here */}
        </div>
      </section>

      {/* Filters Section */}
      <div className="container mx-auto px-4">
        <Filters items={foodItems} onFilterChange={handleFilterChange} />
      </div>

      {/* Food Items Section */}
      <section className="container mx-auto mt-8 px-4">
        <h2 className="text-3xl font-nunito font-bold text-primary mb-6">Our Dishes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredFoodItems.map((item) => (
            <FoodItemCard key={item._id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
