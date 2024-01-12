'use client'
import React from 'react'
import ProfileSideDrop from '../profile/profileSideDrops'
import Image from 'next/image'
import ProfilePic from '@/public/day.jpg'
import { Menu, MenuHandler, MenuList } from '@material-tailwind/react'



function Profile() {
    const brightMode = false
  return (
    <div>
        <Menu placement="left">
          <MenuHandler>
            <div className='relative mt-4 mb-4 w-10 h-8'>
              <Image
              src={ProfilePic}
              placeholder='blur'
              fill={true}
              style={{objectFit: 'cover'}}
              alt='user profile picture'
              className='rounded mb-10 cursor-pointer'
               />
            </div>
          </MenuHandler>
          <MenuList className={`px-4 py-1 relative outline-none transition-all duration-700 rounded-l-xl ${!brightMode ?'bg-[#44979C]' :'bg-[#44979C] opacity-10'}`}>
            <ProfileSideDrop />
          </MenuList>
        </Menu>
        
    </div>
  )
}

export default Profile