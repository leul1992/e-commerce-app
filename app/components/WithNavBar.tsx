import React, { ReactNode } from 'react'
import NavSideBar from './navSideBar/NavSideBar'

interface WithNavBarProps {
    children: ReactNode;
}


const WithNavBar: React.FC<WithNavBarProps> = ({children}) => {
  return (
    <></>
  )
}

export default WithNavBar