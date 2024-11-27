import React from "react";

const AboutSection = () => {
  return (
    <div className=" bg-base-200 min-h-[557px] mt-[130px]">
      <div className="hero-content flex-col lg:flex-row justify-between w-full">
        <div className="relative">
            <img src="/assets/images/about_us/person.jpg"  className="md:h-[473px] md:w-[460px] rounded-lg shadow-2xl"
            />
            <img src="/assets/images/about_us/parts.jpg"  className="w-1/2 h-2/3 md:h-[332px] md:w-[327px] border-[10px] border-white rounded-lg shadow-2xl absolute top-1/2 left-1/2 z-10"
            />
        </div>
        <div className="max-w-[489px] mt-10 sm:mt-[150px] lg:mt-0">
          <h3 className="text-2xl text-[#FF3811] mb-5">About Us</h3>
          <h1 className="text-5xl font-bold mb-5">We are qualified & of experience in this field</h1>
          <p className="py-6 text-[#737373]">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
          </p>
          <p className="py-6 text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
          <button className="btn bg-[#FF3811] text-white">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
