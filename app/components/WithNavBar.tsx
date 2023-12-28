import React, { ReactNode } from 'react'
import NavSideBar from './navSideBar/NavSideBar'

interface WithNavBarProps {
    children: ReactNode;
}


const WithNavBar: React.FC<WithNavBarProps> = ({children}) => {
  return (
    <div className="flex justify-between">
        <div className='w-[70%] sm:w-[83%] lg:w-11/12'>{children}</div>
        <div>
            <NavSideBar />
        </div>
    </div>
  )
}

export default WithNavBar