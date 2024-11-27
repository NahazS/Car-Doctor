import React from 'react';
import { FaArrowRight,  } from "react-icons/fa";
const ServiceRight = () => {
    return (
        <div className='max-w-full h-[490px] p-[40px] bg-[#F3F3F3] rounded-xl flex flex-col'>
            <h1 className='text-[25px] font-bold flex-grow'>Services</h1>
            <div className='flex flex-col gap-y-5'>
                <button className='btn border-none w-full flex justify-between bg-white hover:bg-[#FF3811] hover:text-white'>Full Car Repair <FaArrowRight/></button>
                <button className='btn border-none w-full flex justify-between bg-white hover:bg-[#FF3811] hover:text-white'>Engine Repair <FaArrowRight/></button>
                <button className='btn border-none w-full flex justify-between bg-white hover:bg-[#FF3811] hover:text-white'>Automatic Services <FaArrowRight/></button>
                <button className='btn border-none w-full flex justify-between bg-white hover:bg-[#FF3811] hover:text-white'>Engine Oil Change <FaArrowRight/></button>
                <button className='btn border-none w-full flex justify-between bg-white hover:bg-[#FF3811] hover:text-white'>Battery Charge <FaArrowRight/></button>
                
            </div>
        </div>
    );
};

export default ServiceRight;