'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function EnteringChoice() {
  const pathName = usePathname()
  return (
    <div className="flex cursor-pointer bg-stone-100 rounded-xl w-32">
        <Link href="/login" className={`flex rounded-xl justify-center w-1/2 ${pathName === '/login' ? 'bg-backGroundGreen text-white' : 'text-black'}`}>Login</Link>
        <Link href="/signup" className={`flex rounded-xl justify-center w-1/2 ${pathName === '/signup' ? 'bg-backGroundGreen text-white' : 'text-black'}`}>Signup</Link>
    </div>
  )
}

export default EnteringChoice