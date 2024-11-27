import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const Slide = ({slide}) => {
    return (
      <div
        className="hero min-h-[600px] text-white relative rounded-xl"
        style={{
          backgroundImage:
            `url(/assets/images/banner/${slide}.jpg)`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-left absolute top-1/2 transform translate-y-[-50%] left-1/2 translate-x-[-50%] lg:translate-x-0 lg:left-[100px]">
          <div className="max-w-md">
            <h1 className="mb-5 text-6xl font-bold">Affordable Price For Car Servicing</h1>
            <p className="mb-5">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <button className="btn bg-[#FF3811] mr-5">Discover More</button>
            <button className="btn btn-outline">Latest Project</button>
          </div>
        </div>
      </div>
    );
};

export default Slide;