import React from 'react';

const WhyChooseUs = () => {
    return (
        <div className="items-center flex flex-col mt-[130px]">
            <div className="bg-base-200 h-fit">
                <div className="hero-content text-center">
                    <div className="max-w-[717px]">
                    <h3 className="text-2xl text-[#FF3811] mb-5">Core Features</h3>
                    <h1 className="text-5xl font-bold mb-5">Why Choose Us</h1>
                    <p className="py-6 text-[#737373]">
                    the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                    </p>
                    </div>
                </div>
            </div>
            <div className="flex gap-6 flex-wrap justify-center">
                <div className='whyChooseUsCard'>
                    <img src="/assets/icons/group.svg" alt="" />
                    <p className='text-lg font-bold'>Expert Team</p>
                </div>
                <div className='whyChooseUsCard'>
                    <img className='w-[53px]' src="/assets/icons/time.png" alt="" />
                    <p className='text-lg font-bold'>Timely Delivery</p>
                </div>
                <div className='whyChooseUsCard'>
                    <img src="/assets/icons/person.svg" alt="" />
                    <p className='text-lg font-bold'>24/7 Support</p>
                </div>
                <div className='whyChooseUsCard'>
                    <img src="/assets/icons/Wrench.svg" alt="" />
                    <p className='text-lg font-bold'>Best Equipment</p>
                </div>
                <div className='whyChooseUsCard'>
                    <img src="/assets/icons/check.svg" alt="" />
                    <p className='text-lg font-bold'>100% Guaranty</p>
                </div>
                <div className='whyChooseUsCard'>
                    <img src="/assets/icons/deliveryt.svg" alt="" />
                    <p className='text-lg font-bold'>Timely Delivery</p>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;