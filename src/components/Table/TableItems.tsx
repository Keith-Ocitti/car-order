// components/Table.tsx
import React from 'react';
import styles from "./Table.module.css";


interface TableProps {
    data: { id: string; carNumber: number; name: string; icon: string; trend: string; earning: number; }[];
}

function getStatusColor(status: string): string {
    switch (status) {
      case "Completed":
        return 'greenDot';
      case "In Route":
        return 'redDot';
      case "Pending":
        return 'blueDot';
      default:
        return "";
    }
  }
const TableItems: React.FC<TableProps> = ({ data,  }) => {


    return (
        <div className='overflow-x-auto'>
        

            <table className="table   text-gray-400">

                <thead>
                    <tr className='font-light text-sm border-none'>
                        <th className="py-2 px-2 ">No</th>
                        <th className="py-2 px-2 ">Car No.</th>

                        <th className="py-2 px-3 ">Driver</th>
                        <th className="py-2 px-3 ">Status</th>
                        <th className="py-2 px-2 ">Earning</th>

                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => {
                          const statusColorClass = getStatusColor(item.trend);
                          return(
                            <tr className='border-none py-3' key={item.id}>
                            <td className="py-2 px-2  font-normal text-xs text-sideColor">{item.id}</td>
                            <td className="py-2 px-2 ">
                                <button className='text-sm'> {item.carNumber}</button>
                            </td>
                            <td className="flex items-center gap-2  px-3 ">
                                
                                 <img src={item.icon} alt='driver'/>
                               
                               <span className='text-sm font-normal text-sideColor '>{item.name}</span>
                            </td>
                            <td className=" py-2 px-3 ">
                            <span className={`${styles.statusDot} ${statusColorClass}`}>&#9679;</span>

                                <span className='text-sm font-light text-gray-400'> {item.trend}</span>

                            </td>
                            <td className="py-2 px-2  text-sm font-light text-gray-400">${item.earning}</td>
                            <td className='py-2 px-2 '>
                                <button className='detailsButton'> Details</button>
                            </td>
                        </tr>
                          );
                    
                          })}
                </tbody>
            </table>
        </div>

    );
};

export default TableItems;
