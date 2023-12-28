'use client'
import React from 'react'
import AdminControlled from './Admindummy';

interface AdminContentProps {
    content: string;
    index: number;
}
function AdminContent({content, index}: AdminContentProps) {
    
  return (
    <div key={index}>
        { AdminControlled[content].map((data, ind) => (
                <div key={ind}
                onClick={()=> console.log(data)}
                className="flex flex-col gap-1">
                    {data}
                </div>
            ))
        }
        
    </div>
  )
}

export default AdminContent