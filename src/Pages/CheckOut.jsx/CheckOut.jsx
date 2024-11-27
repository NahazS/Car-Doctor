import React, { useContext } from 'react';
import { useLoaderData, useLocation, useParams } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import moment from 'moment';

const CheckOut = () => {
    const service = useLoaderData()
    const {user, loading} = useContext(AuthContext)
    const {price, title, _id} = service
    if (loading) {
        return <div>Loading...</div>; // Show loading message while data is being fetched
    }
    const email = user?.email
    const orderStates = false
    const orderTime = moment().format('L');
    const order = {email, service, orderStates, orderTime}
    const handleCheckOut = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3000/orders` ,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(order),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        fetch(``)
    }
    return (
        <div className='px-5 xl:px-0 max-w-[1140px] mx-auto '>
            <div className="relative h-[300px] w-full rounded-xl overflow-hidden mt-[50px]">
              <div className="bg-custom-gradient absolute inset-0 z-10"></div>
              <img className="h-full w-full object-cover" src="/assets/images/services/serviceTitle.png" alt="" />
              <h1 className='text-white text-[45px] absolute top-[150px] transform translate-y-[-50%] left-[100px] z-10'>Check Out</h1>
              <button className='btn bg-[#FF3811] border-none text-white text-xl absolute z-10 top-[85%] left-1/2 translate-x-[-50%]'>Home/Checkout</button>
            </div>
            
            <div className='h-[700px] bg-[#F3F3F3] rounded-xl p-[97px] my-[130px]'>
                <form onSubmit={handleCheckOut} className='w-full h-full flex flex-col gap-y-6'>
                    <div className='flex gap-6'>
                        <div className='flex flex-col w-1/2'>
                            <span className='text-lg font-bold text-gray-500'>First Name:</span>
                            <input type="text" placeholder="First Name" className="input bg-white focus:border-none" required 
                            />
                        </div>
                        <div className='flex flex-col w-1/2'>
                            <span className='text-lg font-bold text-gray-500'>First Name:</span>
                            <input type="text" placeholder="Last Name" className="input bg-white focus:border-none" required 
                            />
                        </div>
                    </div>
                    <div className='flex gap-6'>
                        <div className='flex flex-col w-1/2'>
                            <span className='text-lg font-bold text-gray-500'>Phone:</span>
                            <input type="number" placeholder="Your Phone" className="input bg-white focus:border-none flex-grow " required
                            />
                        </div>
                        <div className='flex flex-col w-1/2'>
                            <span className='text-lg font-bold text-gray-500'>Email:</span>
                            <input type="email" placeholder="Your Email" className="input bg-white focus:border-none" required defaultValue={email}
                            />
                        </div>
                    </div>
                    <div className='flex gap-6'>
                        <div className='flex flex-col w-1/2'>
                            <span className='text-lg font-bold text-gray-500'>Service:</span>
                            <input type="text" className="input border-none disabled:bg-white disabled:text-gray-500 disabled:cursor-not-allowed" disabled defaultValue={title}
                            />
                        </div>
                        <div className='flex flex-col w-1/2'>
                            <span className='text-lg font-bold text-gray-500'>Price:</span>
                            <input type="text" className="input border-none disabled:bg-white disabled:text-gray-500 disabled:cursor-not-allowed" disabled defaultValue={'$' + price}
                            />
                        </div>
                    </div>
                    
                    <div className='flex-grow flex'>
                        <textarea className="textarea focus:border-none bg-white w-full" placeholder="Your Message"></textarea>
                    </div>
                    <div>
                        <button className='btn bg-[#FF3811] text-white hover:text-black w-full'>Order Confirm</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;