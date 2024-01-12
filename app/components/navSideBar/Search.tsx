import { Button, Popover, PopoverContent, PopoverHandler } from '@material-tailwind/react'
import React from 'react'

function Search() {
  return (
<div className="flex flex-col outline-none gap-1">
    <input type='text' className='outline-none border-b-4 text-small pl-1' placeholder='Search' />
    <button className='self-end bg-backGroundGreen text-white hover:opacity-80 rounded-md font-medium px-1'>Go</button>
</div>
  )
}

export default Search