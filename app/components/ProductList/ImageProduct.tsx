'use client'
import Image, { StaticImageData } from 'next/image';
import React from 'react'

interface Products {
    image: StaticImageData;
  }

const ImageProduct: React.FC<Products> = ({ image }) => {
  return (
    <div onClick= {() => console.log('click')} className="relative w-full h-full">
      <Image style={{objectFit: "cover"}} src={image} fill={true} quality={100} alt={`products`} />
    </div>
  )
}

export default ImageProduct