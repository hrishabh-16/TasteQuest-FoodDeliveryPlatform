import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/pagination';

const CuisineCard = ({ cuisineList }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  return (
    <Swiper
      spaceBetween={20}  // Increased space between slides for better visibility
      slidesPerView="auto"
      className="flex"
    >
      {cuisineList.map((cuisine, index) => (
        <SwiperSlide key={index} style={{ width: '150px' }}> {/* Set a fixed width for each card */}
          <div
            className={`flex flex-col items-center cursor-pointer transform transition duration-300 ${
              selectedCard === index ? 'scale-105 shadow-lg' : ''
            }`}
            onClick={() => handleCardClick(index)}
          >
            <img 
              src={cuisine.image} 
              alt={cuisine.name} 
              className="w-24 h-24 rounded-full object-cover mb-2" 
            />
            <h3 className="text-base font-bold text-gray-800">{cuisine.name}</h3>
            {/* Uncomment to show descriptions if needed */}
            {/* <p className="text-sm text-gray-600">{cuisine.description}</p> */}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CuisineCard;
