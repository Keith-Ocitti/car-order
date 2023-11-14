import React from 'react';

interface Income {
  title: string;
  amount: string;
  icon: string;
  percentage: string;
  description: string;
  subtitle: string ;
  sum: string;
}

const CardItem: React.FC<Income> = ({ title,
  amount,
  icon,
  percentage,
  description,
  subtitle,
  sum }) => {
  return (
    <div className="card card-compact   bg-base-100 shadow-md rounded-lg  mt-12  md:flex-shrink">
      <div className="card-body">
        <div className='flex justify-between items-center  '>
          <div className='font-medium text-lg text-gray-400'> <p >{title}</p></div>
         <div><p>Today</p></div>
        </div>

        <div className='divider mt-0'></div>
        <div className='flex justify-between items-center'>
          <div className='font-bold text-2xl text-sideColor'> <h1>${amount}</h1></div>
          <div className='flex gap-1'>
            <img src={icon} alt='arrow'/>
             <p>{percentage}%</p>
          </div>
        </div>

       
        <p className='text-sm  font-light text-gray-500'>{description}</p>

        <div className='flex justify-between font-medium text-sm text-gray-600'>
          <div><p>{subtitle}</p></div>
          <div><p>${sum}</p></div>
          
            
          </div>

      </div>
    </div>
  );
}

export default CardItem;
