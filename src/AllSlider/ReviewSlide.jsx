import React from "react";
import { FaStar } from "react-icons/fa6";
const ReviewSlide = () => {
  return (
    <div className="border-[1px] border-[#F3F3F3] rounded-xl max-w-[558px] min-h-[349px] py-[50px] pl-[50px] pr-[19px]">
      <div className="flex">
        <div className="avatar">
          <div className="w-[60px] h-[60px] mr-5 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" 
            />
        </div>
        </div>
        <div className="mr-[85px]">
          <h1 className="text-2xl text-[#444]">Awlad Hossain</h1>
          <h2 className="text-xl text-[#737373]">Businessman</h2>
        </div>
        <div>
          <img  src="/assets/icons/quote 1.svg" alt="" />
        </div>
      </div>
      <div className="text-[#737373] max-w-[489px] mt-[22px]">
        <p className="text-base">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      </div>
      <div className="flex text-[#ff912c] mt-[20px]">
        <FaStar></FaStar>
        <FaStar></FaStar>
        <FaStar></FaStar>
        <FaStar></FaStar>
        <FaStar></FaStar>
      </div>
    </div>
  );
};

export default ReviewSlide;
