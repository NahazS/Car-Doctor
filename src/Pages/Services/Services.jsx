import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './Component/ServiceCard';
import ServiceFullDetails from '../ServiceFullDetails/ServiceFullDetails';

const Services = () => {
    const services = useLoaderData()
    return (
        <div className='px-5 xl:px-0 max-w-[1140px] mx-auto '>
            <div className="relative h-[300px] w-full rounded-xl overflow-hidden mt-[50px]">
              <div className="bg-custom-gradient absolute inset-0 z-10"></div>
              <img className="h-full w-full object-cover" src="/assets/images/services/serviceTitle.png" alt="" />
              <h1 className='text-white text-[45px] absolute top-[150px] transform translate-y-[-50%] left-[100px] z-10'>Service</h1>
              <button className='btn bg-[#FF3811] border-none text-white text-xl absolute z-10 top-[85%] left-1/2 translate-x-[-50%]'>Home/Services</button>
            </div>
            
            <div className="flex gap-6 flex-wrap justify-center mt-[130px]">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;