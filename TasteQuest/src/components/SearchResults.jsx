import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import FoodItemCard from './FoodItemCard'; // Import your FoodItemCard component

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get the search query from the URL
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get(`api/search?query=${query}`);
        setResults(response.data);  // Assuming the response contains an array of items
        setLoading(false);
      } catch (err) {
        setError('Error fetching search results');
        setLoading(false);
      }
    };

    if (query) {
      fetchSearchResults();
    }
  }, [query]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (results.length === 0) {
    return <div>No items found for "{query}"</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {results.map((item) => (
        <FoodItemCard key={item._id} item={item} />
      ))}
    </div>
  );
};

export default SearchResults;
