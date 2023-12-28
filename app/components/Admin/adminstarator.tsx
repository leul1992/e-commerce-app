'use client'
import React, { useState } from 'react'
import CardAdmin from './Card'
import AdminContent from './AdminContent';
interface AdminProps {
  index: number;
}

function Adminstarator() {
    const lists = ['Products', 'Users', 'Orders', 'Authorization']
    const [activeCard, setActiveCard] = useState(0)
    const handleCardClick = ({index}:AdminProps) => {
      setActiveCard(index)
    }
  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2'>
          {lists.map((value, index) => (
              <CardAdmin
              isSelected={index === activeCard}
              onClick={() => handleCardClick({index})}
              text={value}
              index={index} />
          ))}
      </div>
      <AdminContent content={lists[activeCard]} index={activeCard} />
    </div>
  )
}

export default Adminstarator