'use client'
import React from 'react';

interface RatingsProps {
  rating: number;
  allow?: boolean;
}

function Ratings({ rating, allow = true }: RatingsProps) {
  const filledStars = Array.from({ length: 5 }, (_, index) => index < rating);

  const handleChange = (index: number) => {
    if (allow) {
      // Handle the change logic here, e.g., updating the rating in the parent component
      console.log(`Selected rating: ${index + 1}`);
    }
  };

  return (
    <div className="rating">
      {filledStars.map((filled, index) => (
        <input
          key={index}
          type="radio"
          name="rating-1"
          className={`mask mask-star-2 ${filled ? 'bg-orange-400' : 'bg-gray-300'}`}
          readOnly={!allow}
          onClick={() => handleChange(index)}
        />
      ))}
    </div>
  );
}

export default Ratings;
