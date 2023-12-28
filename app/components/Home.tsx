import React from 'react'
import NavSideBar from './navSideBar/NavSideBar'
import ProductTagSlider from './ProductTag/ProductTagSlider'
import ShowProducts from './ProductList/ShowProducts'
import WithNavBar from './WithNavBar'

function HomePage() {
  return (
    <WithNavBar>
      <div className="flex pt-20 flex-col items-center gap-10">
        <div className="w-full">
          <ProductTagSlider />
        </div>
        <div className='w-full'>
          <span className=''>Recommended</span>
          <ShowProducts />
        </div>
        <div className='w-full'>
          <span className="">Electronics</span>
          <ShowProducts />
        </div>
      </div>
    </WithNavBar>
  )
}

export default HomePage