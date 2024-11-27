import React from 'react';
import SupportCard from './Component/SupportCard';
import StepCard from './Component/StepCard';
import ServiceRight from './Component/ServiceRight';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const ServiceFullDetails = () => {
    const service = useLoaderData()
    const {_id,img,price,title, description,facility,steps} = service
    return (
        <div className='px-5 xl:px-0 max-w-[1140px] mx-auto mb-[130px]'>
            <div className="relative h-[300px] w-full rounded-xl overflow-hidden mt-[50px]">
              <div className="bg-custom-gradient absolute inset-0 z-10"></div>
              <img className="h-full w-full object-cover" src="/assets/images/services/serviceTitle.png" alt="" />
              <h1 className='text-white text-[45px] absolute top-[150px] transform translate-y-[-50%] left-[100px] z-10'>Service Details</h1>
              <button className='btn bg-[#FF3811] border-none text-white text-xl absolute z-10 top-[85%] left-1/2 translate-x-[-50%]'>Home/Service Details</button>
            </div>
            <div className='mt-[130px] flex flex-col gap-y-5 xl:gap-y-0 items-center xl:items-start xl:flex-row justify-between'>

                {/* <-------------------------- Service Full details left side section --------------------------> */}
                <div className='max-w-[752px]'>
                    {/* <--------------------------service step --------------------------> */}
                    <div>

                        {/* <--------------------------service title and details --------------------------> */}
                        <div className='w-full'>
                            <img className='w-full h-[400px] rounded-xl' src={img} alt="" />
                            <h1 className='text-[35px] font-bold mt-[50px]'>{title}</h1>
                            <p className='text-[#737373] mt-[30px]'>{description} There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                        </div>

                        {/* <--------------------------support Card section --------------------------> */}
                        <div className='flex flex-wrap justify-center gap-6 mt-[30px]'>
                            {
                                facility.map(fac => <SupportCard key={_id} fac={fac}></SupportCard>)
                            }
                        </div>
                        <p className='text-[#737373] mt-[30px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                    </div>

                    {/* <-------------------------- Step section --------------------------> */}
                    <div>
                        <div className='mt-[50px]'>
                            <h1 className='text-[35px] font-bold'>3 Simple Steps to Process</h1>
                            <p className='text-[#737373] mt-[30px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                        </div>

                        {/* <-------------------------- Step Card section --------------------------> */}
                        <div className='flex flex-wrap justify-center gap-[23px] mt-[30px]'>
                            {
                                steps.map(s => <StepCard key={s.step} s={s}></StepCard>)
                            }
                        </div>
                    </div>

                    {/* <-------------------------- video section --------------------------> */}
                    <div className='mt-[30px]'>
                        {/* <iframe className='w-full h-[400px] rounded-xl' src="https://www.youtube.com/embed/PUkAIAIzA0I"
                        allowFullScreen 
                        /> */}
                    </div>
                </div>

                {/* <-------------------------- Service Full details right side section --------------------------> */}
                <div className='w-[364px]'>
                    <ServiceRight></ServiceRight>
                    <div className='mt-[30px]'>
                        <h1 className='text-[35px] font-bold mb-[30px]'>Price ${price}</h1>
                        <Link to={`/checkOut/${_id}`} className='btn w-full bg-[#FF3811] text-white font-semibold hover:text-black'>Proceed Checkout</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceFullDetails;
