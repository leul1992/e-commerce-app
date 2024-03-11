import React from 'react';
import ImageProduct from '../components/ProductList/ImageProduct';
import user1 from '../components/ProductList/ProductFiles';
import { GrCart } from 'react-icons/gr';
import Counter from '../cart/Count';

function ImageList() {
  return (
    <>
      <div className='flex w-full relative items-end gap-6'>
        {User1.productPic.slice(0, 4).map((prod, index) => (
          <div
          key={index}
          className="w-1/4 md:w-48 h-36 relative">
            {index === 3 ? (
              <>
                <ImageProduct image={prod} />
                <label
                  htmlFor="my_modal_7"
                  className="btn absolute top-0 left-0 w-full md:w-48 h-36 opacity-60 text-8xl text-backGroundGreen rounded-none"
                >
                  +
                </label>
              </>
            ) : (
              <ImageProduct image={prod} />
            )}
          </div>
        ))}
        <div className='flex gap-2 items-center text-xl'>
          <button className='bg-backGroundGreen px-1 text-white rounded-sm'>
            <GrCart />
          </button>
          <Counter start={1}/>
        </div>
      </div>

      <input type="checkbox" id="my_modal_7" className="w-full modal-toggle" />
      <div className="modal w-full" role="dialog">
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
        <div className="w-full px-2">
          <div className="flex gap-4 modal-content w-full overflow-auto">
            {User1.productPic.map((prod, index) => (
              <div
              key={index}
              className="w-80 h-64">
                <ImageProduct image={prod} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageList;
