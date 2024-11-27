import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import OrderCard from './OrderCard';

const OrderList = () => {
    const {user, loading} = useContext(AuthContext)
    if(loading)
    {
        return <h1>nahaz</h1>
    }
    const [userOrder, setUserOrder] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3000/orders?email=${user?.email}`, {credentials: 'include',})
        .then(res => res.json())
        .then(data => setUserOrder(data))
    },[])
    return (
        <div className='px-5 xl:px-0 max-w-[1140px] mx-auto '>
            <div className="relative h-[300px] w-full rounded-xl overflow-hidden mt-[50px]">
              <div className="bg-custom-gradient absolute inset-0 z-10"></div>
              <img className="h-full w-full object-cover" src="/assets/images/services/serviceTitle.png" alt="" />
              <h1 className='text-white text-[45px] absolute top-[150px] transform translate-y-[-50%] left-[100px] z-10'>Order List</h1>
              <button className='btn bg-[#FF3811] border-none text-white text-xl absolute z-10 top-[85%] left-1/2 translate-x-[-50%]'>Home/Order List</button>
            </div>
            <div>
            <div className="overflow-x-auto">
                <table className='w-full'>
                    {/* head */}
                    <thead className="table mt-[130px] w-full flex justify-between">
                    <tr className='flex justify-between'>
                        <th>a</th>
                        <th>a</th>
                        <th>a</th>
                        <th>a</th>
                        <th>a</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            userOrder.map(order => <OrderCard key={order._id} order={order}></OrderCard>)
                        }
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    );
};

export default OrderList;