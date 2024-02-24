import React from 'react'
import ProfileSideDrop from '../profile/profileSideDrops'
import Image from 'next/image'
import ProfilePic from '@/public/day.jpg'
import { Menu, MenuHandler, MenuList } from '@material-tailwind/react'
import { useAppSelector } from '@/lib/hooks'
import { selectUser } from '@/lib/features/user/userSlice'
import Link from 'next/link'


function Profile() {
    const brightMode = false
    const {isLoggedIn} = useAppSelector(selectUser);
  return (
    <div>
      {isLoggedIn ? 
        <>
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
          <MenuList placeholder={''} className={`px-4 py-1 relative outline-none transition-all duration-700 rounded-l-xl ${!brightMode ?'bg-[#44979C]' :'bg-[#44979C] opacity-10'}`}>
            <ProfileSideDrop />
          </MenuList>
        </Menu>
        </> :
        <>
          <Link href='/login'>
            <div className="bg-backGroundGreen flex items-center justify-center hover:opacity-80 mt-4 mb-4 w-12 h-8 rounded-md text-white font-bold">Login</div>
          </Link>
        </>
      }
    </div>
  )
}

export default Profile