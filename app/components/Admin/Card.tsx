import React from 'react'
interface CardAdminProps {
    text: string;
    index: number;
    isSelected: boolean;
    onClick: () => void;
}
function CardAdmin({text, index, isSelected, onClick}: CardAdminProps) {
  return (
    <div
    key={index}
    onClick={onClick}
    className={`bg-backGroundGreen cursor-pointer ${isSelected && "opacity-60"} hover:opacity-80 py-1 mx-14 md:px-0 md:w-32 flex justify-center text-white font-semibold`}>
        <span>{text}</span>
    </div>
  )
}

export default CardAdmin