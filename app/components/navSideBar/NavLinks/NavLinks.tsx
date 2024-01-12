import Link from 'next/link'
import React from 'react'
import { IconContainer } from '../IconContainer/IconContainer'
import { GrCart, GrHomeRounded, GrNotification, GrSettingsOption } from 'react-icons/gr'
import { usePathname } from 'next/navigation';

function NavLinks() {

  const linksData = [
    { href: '/', icon: <GrHomeRounded size={22} />},
    { href: '/cart', icon: <GrCart size={22} /> },
    { href: '/notifications', icon: <GrNotification size={22} /> },
    { href: '/settings', icon: <GrSettingsOption size={22} /> },
  ];

  const pathName = usePathname()

  return (
    <>
      {linksData.map(({ href, icon }) => (
        <Link key={href} href={href} className={`w-full ${pathName === href && 'bg-backGroundGreen text-white'}`}>
          <IconContainer icon={icon} />
        </Link>
      ))}
    </>
  );
}

export default NavLinks;
