import React from 'react'
import ImageList from './ImageList'
import WithNavBar from '../components/WithNavBar'
import Ratings from './RatingsInput'
import DescRate from './DescRate'
function ProductDetails() {
  return (
    <WithNavBar>
        <ImageList />
        <div className="flex gap-2 items-center">
          <Ratings rating={5}/>
          <span className="font-medium">2,321 ratings</span>
        </div>
        <DescRate />
    </WithNavBar>
  )
}

export default ProductDetails