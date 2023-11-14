// pages/index.tsx
import React from 'react';
import Image from 'next/image';
import Filter from "../../../public/Filter.svg";
// import User1Image from "../../../../public/User1.svg";
// import User2Image from "../../../../public/User2.png";
// import User3Image from "../../../../public/User3.svg";
import TableItems from './TableItems';


const data = [
  {  id: '01',
  carNumber: 6465,
  icon: '/User1.svg',
  name: "Alex Noman",
  trend: "Completed",
  earning:  35.44,},

  {
    id: "02",
    carNumber: 5665,
    icon:'/User2.png',
    name: "Razib Rahman",
    trend: "Pending",
    earning:  0.00,
  },

  {
    id: "03",
    carNumber: 1755,
    name: "Luke Norton",
    icon:'/User3.svg',
    trend: "In Route",
    earning: 23.50,
  },

  {
    id: "03",
    carNumber: 1755,
    name: "Luke Norton",
    icon:'/User3.svg',
    trend: "In Route",
    earning: 23.50,
  },
  {
    id: "03",
    carNumber: 1755,
    name: "Luke Norton",
    icon:'/User3.svg',
    trend: "In Route",
    earning: 23.50,
  },
  {
    id: "03",
    carNumber: 1755,
    name: "Luke Norton",
    icon:'/User3.svg',
    trend: "In Route",
    earning: 23.50,
  },
  {
    id: "03",
    carNumber: 1755,
    name: "Luke Norton",
    icon:'/User3.svg',
    trend: "In Route",
    earning: 23.50,
  },
  {
    id: "03",
    carNumber: 1755,
    name: "Luke Norton",
    icon:'/User3.svg',
    trend: "In Route",
    earning: 23.50,
  },
  {
    id: "03",
    carNumber: 1755,
    name: "Luke Norton",
    icon:'/User3.svg',
    trend: "In Route",
    earning: 23.50,
  },
  {
    id: "03",
    carNumber: 1755,
    name: "Luke Norton",
    icon:'/User3.svg',
    trend: "In Route",
    earning: 23.50,
  },
  {
    id: "03",
    carNumber: 1755,
    name: "Luke Norton",
    icon:'/User3.svg',
    trend: "In Route",
    earning: 23.50,
  },
];

const Home: React.FC = () => {
  return (
    <div className="container mx-auto mt-8 shadow-xl border-2 border-neutral-100">
         <div className='flex justify-between py-2 px-2 mt-2 '>
                <h1>Live Car Status</h1>
                <div className='flex gap-2 items-center' >
                    <Image src={Filter} alt='filter' />
                    <span>Filter</span>
                </div>

            </div>
      <TableItems data={data} />
    </div>
  );
};

export default Home;
