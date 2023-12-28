'use client'
import React, { useState } from 'react';
import { GrHomeRounded, GrSearch, GrCart, GrFilter, GrNotification, GrSettingsOption } from 'react-icons/gr';
import Profile from './Profile';
import SideBarHideToggle from './SideBarHideToggle';
import Link from 'next/link';
import { Popover, PopoverHandler, PopoverContent } from '@material-tailwind/react';
import Search from './Search';

const IconContainer: React.FC<{ icon: React.ReactNode; active: boolean }> = ({ icon, active }) => {
  return (
    <div className={`w-full ${active && 'bg-backGroundGreen text-white'} cursor-pointer hover:bg-backGroundGreen hover:text-white border-t-4 w-full py-3 flex justify-center`}>
      {icon}
    </div>
  );
};

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
          <Link href='/' className='w-full'>
            <IconContainer icon={<GrHomeRounded size={22} />} active={true} />
          </Link>
          <Popover placement="left">
          <PopoverHandler>
          <Link href="#" className='w-full'>
            <IconContainer icon={<GrSearch size={22} />} active={false} />
          </Link>
          </PopoverHandler>
          <PopoverContent className='border-0'>
            <Search />
          </PopoverContent>
        </Popover>
          <Link href="/cart" className='w-full'>
            <IconContainer icon={<GrCart size={22} />} active={false} />
          </Link>
          <Link href="#" className='w-full'>
            <IconContainer icon={<GrFilter size={22} />} active={false} />
          </Link>
          <Link href="#" className='w-full'>
            <IconContainer icon={<GrNotification size={22} />} active={false} />
          </Link>
          <Link href="#" className='w-full'>
            <IconContainer icon={<GrSettingsOption size={22} />} active={false} />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavSideBar;