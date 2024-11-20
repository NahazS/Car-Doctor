import React from 'react';

const ContactSection = () => {
    return (
        <div className='text-white flex flex-wrap gap-[60px] px-[20px] md:px-[73px] py-[95px] bg-black justify-center min-h-[250px] rounded-xl mt-[130px]'>
            <div>
                <img src="/assets/icons/contactTime.svg" alt="" />
                <p>We are open monday-friday</p>
                <h1 className='text-2xl'>7:00 am - 9:00 pm</h1>
            </div>
            <div>
                <img src="/assets/icons/contactMessage.svg" alt="" />
                <p>Have a question?</p>
                <h1 className='text-2xl'>+2546 251 2658</h1>
            </div>
            <div>
                <img src="/assets/icons/contactLocation.svg" alt="" />
                <p>Need a repair? our address</p>
                <h1 className='text-2xl'>Liza Street, New York</h1>
            </div>
        </div>
    );
};

export default ContactSection;