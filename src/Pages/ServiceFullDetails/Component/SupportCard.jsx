import React from 'react';

const SupportCard = ({fac}) => {
    const {name, details} = fac
    return (
        <div className='max-w-[364px] min-h-[204px] rounded-xl bg-[#F3F3F3] border-t-2 border-[#FF3811] p-[40px]'>
            <h1 className='text-[#444] text-xl font-bold mb-[10px]'>{name}</h1>
            <p className='text-[#737373]'>{details}</p>
        </div>
    );
};

export default SupportCard;