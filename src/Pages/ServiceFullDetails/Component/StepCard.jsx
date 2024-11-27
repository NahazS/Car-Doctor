import React from 'react';

const StepCard = ({s}) => {
    const {step, instruction} = s
    return (
        <div className='max-w-[235px] min-h-[277px] py-[39px] px-[36px] rounded-xl border-[1px] border-[#E8E8E8] text-center flex flex-col items-center'>
            <div className='bg-[url(/assets/images/services/step.png)] w-[83px] h-[83px] mb-5 flex items-center justify-center'>
                <h1 className='text-xl text-white font-bold'>0{step}</h1>
            </div>
            <h1 className='text-xl font-bold mb-5'>Step {step}</h1>
            <p className='text-[#737373]'>{instruction}</p>
        </div>
    );
};

export default StepCard;