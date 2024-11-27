import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import TeamSlide from '../../../AllSlider/TeamSlide';
const OurTeam = () => {
    const allSlide = [1,2,3,4]
    return (
        <>
            <div className="items-center flex flex-col mt-[130px]">
                <div className="bg-base-200 h-fit">
                    <div className="hero-content text-center">
                        <div className="max-w-[717px]">
                        <h3 className="text-2xl text-[#FF3811] mb-5">Team</h3>
                        <h1 className="text-5xl font-bold mb-5">Meet Our Team</h1>
                        <p className="py-6 text-[#737373]">
                        the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                        </p>
                        </div>
                    </div>
                </div>
                <div className="flex gap-6 flex-wrap justify-center">

                </div>
                <button className="btn text-[#FF3811] mt-[50px] ">Latest Project</button>
            </div>
            <div className='flex justify-between'>
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
                  navigation={true}
                  loop={true}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                  breakpoints={{
                    320: { slidesPerView: 1 },
                    476: {slidesPerView: 1.5},
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                  }}
                >
                  {
                    allSlide.map(slide => <SwiperSlide key={slide} ><TeamSlide slide={slide}></TeamSlide></SwiperSlide>)
                  }
                </Swiper>
            </div>
        </>
    );
};

export default OurTeam;