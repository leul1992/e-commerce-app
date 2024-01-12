'use client'
import React, { useState } from 'react';
import {  GrSearch, GrFilter } from 'react-icons/gr';
import Profile from './Profile';
import SideBarHideToggle from './SideBarHideToggle';
import { Popover, PopoverHandler, PopoverContent } from '@material-tailwind/react';
import Search from './Search';
import { IconContainer } from './IconContainer/IconContainer';
import NavLinks from './NavLinks/NavLinks';


function NavSideBar() {
  const [isHidden, setIsHidden] = useState(false);

  const toggleSidebar = () => {
    setIsHidden(!isHidden);
  };

  return (
    <nav className="flex items-start bg-white w-full">
      <SideBarHideToggle onToggle={toggleSidebar} isHidden={isHidden} />
      <div>
        <Profile />
        <div className={`transition-all duration-700 ${isHidden ? 'opacity-0 scale-0' : 'opacity-100 scale-100'} flex flex-col items-center border-4 border-r-0  border-t-0 w-16 `}>
          <Popover placement="left">
          <PopoverHandler>
          <div className='w-full'>
            <IconContainer icon={<GrSearch size={22} />} />
          </div>
          </PopoverHandler>
          <PopoverContent className='border-0'>
            <Search />
          </PopoverContent>
        </Popover>
          <div className='w-full'>
            <IconContainer icon={<GrFilter size={22} />} />
          </div>
          <NavLinks />
        </div>
      </div>
    </nav>
  );
}

export default NavSideBar;