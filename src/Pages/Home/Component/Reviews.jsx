import React from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import ReviewSlide from "../../../AllSlider/reviewSlide";


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Reviews = () => {
  return (
    <div className="mb-[130px]">
      <div className="items-center flex flex-col mt-[130px]">
        <div className="bg-base-200 h-fit">
          <div className="hero-content text-center">
            <div className="max-w-[717px]">
              <h3 className="text-2xl text-[#FF3811] mb-5">Testimonial</h3>
              <h1 className="text-5xl font-bold mb-5">What Customer Says</h1>
              <p className="py-6 text-[#737373]">
                The majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look even slightly
                believable.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            320: { slidesPerView: 1 },
            476: {slidesPerView: 1.5},
            768: { slidesPerView: 2 },
          }}
        >
          <SwiperSlide><ReviewSlide></ReviewSlide></SwiperSlide>
          <SwiperSlide><ReviewSlide></ReviewSlide></SwiperSlide>
          <SwiperSlide><ReviewSlide></ReviewSlide></SwiperSlide>
          <SwiperSlide><ReviewSlide></ReviewSlide></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
