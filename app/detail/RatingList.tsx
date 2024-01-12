// components/RatingList.tsx
import React from 'react';
import { RatingandComment } from './dummyData';
import Ratings from './RatingsInput';
import Image from 'next/image';

interface Photo {
  url: string;
  caption: string;
}

interface CommentEntry {
  name: string;
  comment: string;
  rate: number;
  photo: Photo;
}

const RatingList: React.FC = () => {
  return (
    <div>
      <div className='flex gap-4'>
        <input type="text" className="border-b-4 text-sm outline-none w-3/4" placeholder="Write Your Comment" />
        <button className="bg-backGroundGreen hover:opacity-80 text-white rounded-md p-1">Comment</button>
      </div>

      <div className="mt-4">
        {RatingandComment.map((entry: CommentEntry, index: number) => (
          <div
          key={index}
          className="flex gap-2 w-full">
            <div>
              <Image
              width={30}
              height={30}
              src={entry.photo.url}
              alt={`User ${entry.name}`}
              className='rounded-full'
               />
            </div>
            <div>
              <h4 className="font-bold">{entry.name}</h4>
              <p className='text-sm font-medium'>{entry.comment}</p>
              <Ratings rating={entry.rate} allow={false}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RatingList;
