import React, { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Slide from "./Slide";
const Banner = () => {
    const allSlide = [1,2,3,4,5,6]
    return (
        <div className="relative mt-[130px]">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: ".customArrowRight",
            prevEl: ".customArrowLeft",
          }}
          loop={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {
            allSlide.map(slide => <SwiperSlide key={slide}><Slide slide={slide}></Slide></SwiperSlide>)
          }
        </Swiper>
        <div className="flex absolute z-10 top-[90%] right-0">
          <div className="customArrowLeft">
            <button className="btn btn-circle bg-black bg-opacity-20 text-white border-none">
              <FaArrowLeft />
            </button>
          </div>
          <div className="customArrowRight">
            <button className="btn btn-circle bg-[#FF3811] text-white border-none">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    );
};

export default Banner;