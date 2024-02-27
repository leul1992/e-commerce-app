import React from 'react'
import Image from 'next/image'
import prod from '@/public/phone2.avif'
import Counter from './Count'
import withAuth from '../withAuth'

function CartComponent() {
  return (
    <div className='flex flex-col gap-4 mt-6 ml:6 sm:mt-10 sm:ml-24'>
        <h1 className='font-bold'>Total: <span className='font-medium'>2,340Birr</span></h1>
        <div className='flex gap-4'>
          <div className='relative w-24 h-14 rounded-lg'>
            <Image src={prod} fill={true} className='rounded' alt="product on CartComponent" />
          </div>
          <div className='flex flex-col justify-center font-bold'>
            <span>Hp Pavillion 360</span>
            <span>2,340Birr</span>
            <div className='flex gap-24'>
              <Counter start={1}/>
              <div className="form-control">
                <label className="cursor-pointer label">
                  <input type="checkbox" className="w-4 h-4 rounded-sm checkbox [--chkfg:white] checkbox-accent" />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className="bg-backGroundGreen ml-4 mt-6 text-white font-bold px-2 rounded-md py-1 hover:opacity-80">Proceed To CheckOut</button>
        </div>
      </div>
  )
}

export default CartComponent