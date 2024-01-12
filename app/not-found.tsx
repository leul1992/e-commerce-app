import Link from 'next/link'
import React from 'react'

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col text-center gap-4 items-center justify-center border bg-slate-800 text-white font-bold w-full h-full">
        <span className='text-3xl'>Can't Seem To Find The Page You Are Looking For</span>
        <Link href="/" className='text-green-500'>Go Back Home</Link>
    </div>
  )
}

export default NotFound