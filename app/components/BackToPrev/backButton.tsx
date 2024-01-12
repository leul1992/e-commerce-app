'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaAngleLeft } from "react-icons/fa6";

function BackButton() {
    const router = useRouter()

    const handleClick = () => {
        router.back()
    }
  return (
    <div className='flex pl-1 font-bold hover:-translate-x-0.5 self-start items-center cursor-pointer text-backGroundGreen hover:opacity-80' onClick={handleClick}>
        <FaAngleLeft />
        <span>Back</span>
    </div>
  )
}

export default BackButton