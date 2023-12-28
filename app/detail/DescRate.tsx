'use client'
import React, { useState } from 'react';
import { GrDown, GrUp } from 'react-icons/gr';
import Description from './Description';
import RatingList from './RatingList';

interface ToggleProps {
    index: number;
}

function DescRate() {
    const [toggle, setToggle] = useState([true, false]);

    const handleToggle = ({ index }:ToggleProps) => {
        const temp = [...toggle];
        temp[index] = !temp[index];
        setToggle(temp);
    };

    return (
        <div>
            <div
                onClick={() => handleToggle({ index: 0 })}
                className='w-full hover:bg-slate-50 py-2 cursor-pointer justify-between flex items-center text-2xl'>
                <h2 className='font-semibold ml-4'>Description</h2>
                <div className='text-backGroundGreen mr-4'>
                    {toggle[0] ? <GrUp /> : <GrDown />}
                </div>
            </div>
            {toggle[0] && <Description />}
            <div
                onClick={() => handleToggle({ index: 1 })}
                className='w-full hover:bg-slate-50 py-2 cursor-pointer justify-between flex items-center text-2xl'>
                <h2 className='font-semibold ml-4'>Ratings</h2>
                <div className='text-backGroundGreen mr-4'>
                    {toggle[1] ? <GrUp /> : <GrDown />}
                </div>
            </div>
            {toggle[1] && <RatingList />}
        </div>
    );
}

export default DescRate;
