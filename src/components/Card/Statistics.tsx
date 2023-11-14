import React from 'react';
import Image from 'next/image';
import ArrowUp from '../../../public/up.svg';
import ArrowDown from '../../../public/down.svg';



const Statistics = () => {
  return (
    <div className="card card-compact  bg-base-100 shadow-md mt-12">
      <div className="card-body">
        <div className='flex justify-between items-center '>
          <div><p className="font-medium text-lg text-gray-400">Hire vs Cancel</p></div>
          <button className='today'>Today</button>
        </div>
     
      <div className='mt-4'>

      <div className='flex justify-between pb-1'>    
          <div className='flex items-center gap-1'>
            <button className='w-4 h-4 rounded-full bg-blue-600'></button>
            <p>Total Hired</p>
          </div>
          <div className='flex gap-1'>
            <p>54%</p>
            <Image src={ArrowUp} alt='up'/>
            
          </div>
        </div>

        <div className='flex justify-between pb-1 '>    
          <div className='flex items-center gap-1'>
            <button className='w-4 h-4 rounded-full bg-green-600'></button>
            <p>Total Canceled</p>
          </div>
          <div className='flex gap-1'>
            <p>20%</p>
            <Image src={ArrowUp} alt='up'/>
          </div>
        </div>

        <div className='flex justify-between '>    
          <div className='flex items-center gap-1'>
            <button className='w-4 h-4 rounded-full bg-red-600'></button>
            <p>Total Pending</p>
          </div>
          <div className='flex gap-1'>
            <p>26%</p>
            <Image src={ArrowDown} alt='down'/>
          </div>
        </div>

      </div>

      


      </div>
    </div>
  );
}

export default Statistics;
