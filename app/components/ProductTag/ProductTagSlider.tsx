'use client'
import React, { useState } from 'react';
import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/gr';

interface ProductCardProps {
  name: string;
  isActive: boolean;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, isActive, onClick }) => {
  return (
    <div className={`carousel-item cursor-pointer hover:opacity-70`} onClick={onClick}>
      <span className={`font-md ${isActive ? 'bg-backGroundGreen' : ''} rounded-xl px-2`}>{name}</span>
    </div>
  );
};

function ProductTagSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const product = ['Product 1', 'Product 2', 'Product 3', 'Product 4', 'Product 5', 'Product 6', 'Product 7', 'Product 8', 'Product 9', 'Product 10'];

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
  };

  const handlePreviousClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
  };

  const handleNextClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveIndex((prevIndex) => (prevIndex === product.length - 1 ? product.length - 1 : prevIndex + 1));
  };

  return (
    <div className="text-backGroundGreen flex items-center justify-center">
      <GrFormPreviousLink size={28} onClick={handlePreviousClick}/>
      <div className=" rounded-box bg-[#D9D9D9] text-white p-1 px-4 w-3/4 lg:w-1/2">
        <div className="carousel rounded-box flex gap-2">
          {product.map((prod, index) => (
            <ProductCard key={index} isActive={activeIndex === index} name={prod} onClick={() => handleCardClick(index)} />
          ))}
        </div>
      </div>
      <GrFormNextLink size={28} onClick={handleNextClick}/>
    </div>
  );
}

export default ProductTagSlider;
