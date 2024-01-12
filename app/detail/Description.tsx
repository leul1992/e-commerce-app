import React from 'react'
import {ProductSpecs} from './dummyData'

function Description() {
  return (
    <>
        <p>
            {ProductSpecs.detail}
        </p>
        <h2 className='font-semibold text-xl'>Key Features</h2>
        { ProductSpecs.specs.map((feature, index) => (
        <li key={index}>
            {feature}
        </li>
        ))}
    </>
  )
}

export default Description