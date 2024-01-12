import React from 'react'
import ImageList from './ImageList'
import Ratings from './RatingsInput'
import DescRate from './DescRate'
import BackButton from '../components/BackToPrev/backButton'
function ProductDetails() {
  return (
    <div className="flex gap-6">
        <BackButton />
        <div className='w-full'>
          <ImageList />
          <div className="flex gap-2 items-center">
            <Ratings rating={5}/>
            <span className="font-medium">2,321 ratings</span>
          </div>
          <DescRate />
        </div>
      </div>
  )
}

export default ProductDetails