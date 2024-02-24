'use client'
import React, { useState, useRef } from 'react';
import User1 from './ProductFiles';
import { FaDownLong, FaUpLong  } from "react-icons/fa6";
import ImageProduct from './ImageProduct';
import Link from 'next/link';

function ShowProducts() {
  const [isScrollUpActive, setIsScrollUpActive] = useState(false);
  const [isScrollDownActive, setIsScrollDownActive] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const container = containerRef.current;
    if (container) {
      setIsScrollUpActive(container.scrollTop > 0);
      setIsScrollDownActive(container.scrollTop < container.scrollHeight - container.clientHeight);
    }
  };

  const handleScrollUp = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollTop -= container.clientHeight + 8;
    }
  };

  const handleScrollDown = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollTop += container.clientHeight + 8;
    }
  };

  return (
    <div className="flex w-full justify-center gap-1">
      <FaUpLong
      size={18}
      onClick={handleScrollUp}
      className={`hover:opacity-60 ${isScrollUpActive ? 'active text-[#39ccbd] cursor-pointer' : 'text-gray-500'}`} />
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="grid grid-cols-2 lg:grid-cols-4 w-full sm:w-3/4 lg:w-3/4 h-24 lg:h-48 overflow-x-auto gap-2 scrollbar-hide"
      >
        {User1.productPic.map((prod, index) => (
          <Link href="/detail" key={index} className="flex h-[96px] lg:h-48 space-x-2">
            <ImageProduct image={prod} />
          </Link>
        ))}
      </div>
      <FaDownLong
        size={18}
        onClick={handleScrollDown}
        className={`self-end hover:opacity-50 ${isScrollDownActive ? 'active text-[#39ccbd] cursor-pointer' : 'text-gray-500'}`}
      />
    </div>
  );
}

export default ShowProducts;
