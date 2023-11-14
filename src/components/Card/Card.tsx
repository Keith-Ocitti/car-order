import React from 'react';
import CardItem from './CardItem';
import Statistics from './Statistics';

const Card = () => {
  return (
    <div className='w-full lg:w-80 p-4 bg-cardColor basis-full lg:basis-1/3 bg-gray-300'>
      <div>
        <h1 className='text-xl text-gray-500 font-medium'>Today's Statistics</h1>
        <p className='text-sm font-normal text-gray-300'>Tue,14 Nov,2022,11:30 AM</p>
      </div>
      <CardItem
      title ='Income'
      amount='9460.00'
      icon='/up.svg'
      percentage='15'
      description='Compared to the $9940 yesterday'
      subtitle='Last week Income'
      sum='25658.00' 
      />

<CardItem 
      title ='Expenses'
      amount='5660.00'
      icon='/down.svg'
      percentage='25'
      description='Compared to the $9940 yesterday'
      subtitle='Last week expenses'
      sum='22658.00' 
      />

<Statistics/>

    </div>
  );
}

export default Card;
