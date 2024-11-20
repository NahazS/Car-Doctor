import React from "react";
import ServiceCard from "../../Services/Component/ServiceCard";

const ServicesSection = ({services}) => {

  return (
    <div className="items-center flex flex-col mt-[130px]">
        <div className="bg-base-200 h-fit">
            <div className="hero-content text-center">
                <div className="max-w-[717px]">
                <h3 className="text-2xl text-[#FF3811] mb-5">Service</h3>
                <h1 className="text-5xl font-bold mb-5">Our Service Area</h1>
                <p className="py-6 text-[#737373]">
                the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                </p>
                </div>
            </div>
        </div>
        <div className="flex gap-6 flex-wrap justify-center">
            {
                services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
            }
        </div>
        <button className="btn text-[#FF3811] mt-[50px] ">Latest Project</button>
    </div>
  );
};

export default ServicesSection;
