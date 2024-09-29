import { useState, useEffect, useCallback } from 'react';
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const Filters = ({ items, onFilterChange }) => {
  const [filters, setFilters] = useState({
    // inStock: false,
    ratings4Plus: false,
    veg: false,
    priceRange: null,
    cuisine: null,
  });
  const [sortBy, setSortBy] = useState('');

  const applyFilters = useCallback(() => {
    let filteredItems = items.filter(item => {
      return (
        (!filters.ratings4Plus || item.rating >= 4) &&
        (!filters.veg || item.veg) &&
        (!filters.priceRange || 
          (filters.priceRange === 'less300' && item.price < 300) ||
          (filters.priceRange === '300-600' && item.price >= 300 && item.price <= 600)) &&
        (!filters.cuisine || item.cuisine === filters.cuisine)
      );
    });

    // Apply sorting
    switch (sortBy) {
      case 'priceLowToHigh':
        filteredItems.sort((a, b) => a.price - b.price);
        break;
      case 'priceHighToLow':
        filteredItems.sort((a, b) => b.price - a.price);
        break;
      case 'ratingDescending':
        filteredItems.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // No sorting
        break;
    }

    onFilterChange(filteredItems);
  }, [items, filters, sortBy, onFilterChange]);

  useEffect(() => {
    applyFilters();
  }, [applyFilters]);

  const toggleFilter = (filterName, value = null) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value === prev[filterName] ? null : value
    }));
  };

  const handleSortChange = (value) => {
    setSortBy(value);
  };

  const FilterBadge = ({ filterName, label, value = true }) => (
    <Badge 
      variant={filters[filterName] === value ? "secondary" : "outline"} 
      className="flex items-center gap-1 py-1 px-3 cursor-pointer"
      onClick={() => toggleFilter(filterName, value)}
    >
      {filters[filterName] === value && <Check className="w-4 h-4 mr-1" />}
      {label}
    </Badge>
  );

  return (
    <div className="w-full p-4 bg-white shadow-sm rounded-lg mb-6">
      <h2 className="text-2xl font-bold mb-4">Filters</h2>
      <div className="flex flex-wrap gap-2 items-center">
        <Button variant="outline" className="flex items-center gap-2">
          <span className="bg-black text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            {Object.values(filters).filter(Boolean).length}
          </span>
          Filter
        </Button>
        
        <Select onValueChange={handleSortChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent className="font-roboto">
            <SelectItem value="priceLowToHigh">Price: Low to High</SelectItem>
            <SelectItem value="priceHighToLow">Price: High to Low</SelectItem>
            <SelectItem value="ratingDescending">Rating: Highest First</SelectItem>
          </SelectContent>
        </Select>
        
        <FilterBadge filterName="ratings4Plus" label="Ratings 4.0+" />
        <FilterBadge filterName="veg" label="Veg Only" />
        <FilterBadge filterName="priceRange" label="Rs. 300-Rs. 600" value="300-600" />
        <FilterBadge filterName="priceRange" label="Less than Rs. 300" value="less300" />
        <FilterBadge filterName="cuisine" label="Indian Cuisine" value="Indian" />
      </div>
    </div>
  );
};

export default Filters;