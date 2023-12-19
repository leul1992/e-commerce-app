import React from 'react'
import WithNavBar from '../components/WithNavBar'
import Image from 'next/image'
import prod from '../assets/laptop.avif'
import Counter from './Count'
function pages() {
  return (
    <WithNavBar>
      <div className='flex flex-col gap-4 mt-6 ml:6 sm:mt-10 sm:ml-24'>
        <h1 className='font-bold'>Total: <span className='font-medium'>2,340Birr</span></h1>
        <div className='flex gap-4'>
          <div className='relative w-24 h-14 rounded-lg'>
            <Image src={prod} fill={true} className='rounded' alt="product on cart" />
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
    </WithNavBar>
  )
}

export default pages