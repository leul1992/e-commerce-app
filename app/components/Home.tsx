'use client'
import React from 'react'
import ProductTagSlider from './ProductTag/ProductTagSlider'
import ShowProducts from './ProductList/ShowProducts'

function HomePage() {
  return (
      <div>
        <div className="flex pt-20 flex-col items-center gap-10">
          <div className="w-full">
            <ProductTagSlider />
          </div>
          <div className='w-full text-center space-y-5'>
            <span className='font-bold text-2xl'>Recommended</span>
            <ShowProducts />
          </div>
          <div className='w-full text-center space-y-5'>
            <span className="font-bold text-2xl">Electronics</span>
            <ShowProducts />
          </div>
        </div>
      </div>
  )
}

export default HomePage