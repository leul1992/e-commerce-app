import React from 'react';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

interface SideBarHideToggleProps {
  onToggle: () => void;
  isHidden: boolean;
}

function SideBarHideToggle({ onToggle, isHidden }: SideBarHideToggleProps) {
  return (
    <div className={`transition-all duration-700 text-backGroundGreen hover:opacity-70 cursor-pointer self-center ${isHidden && 'translate-x-16'}`}
    onClick={onToggle}>
      { isHidden ? <FaAngleLeft size={30} /> : <FaAngleRight size={30} /> }
    </div>
  );
}

export default SideBarHideToggle;