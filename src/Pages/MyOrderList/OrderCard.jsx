import React from "react";

const OrderCard = ({order}) => {
  const service = order.service
  const time = order.orderTime
  const states = order.orderStates
  return (
    <div>
      <tr className="bg-base-200 flex justify-between mb-[28px] items-start">
        <th className="hidden sm:flex">
          <div className="avatar">
            <div className="w-20 md:w-24 lg:w-32 rounded">
              <img src={service.img} 
              />
            </div>
          </div>
        </th>
        <td>
            <div className="flex flex-col">
                <h1 className="text-xl text-[#444] font-semibold">{service.title}</h1>
                <p>Color : Green</p>
                <p>Size: S</p>
            </div>
        </td>
        <td className="hidden sm:flex"><h1 className="text-xl text-[#444] font-semibold"></h1>{service.price}</td>
        <td className="hidden md:flex"><h1 className="text-xl text-[#2D2D2D] font-medium"></h1>{time}</td>
        <td><button className="btn bg-[#FF3811] text-white hover:text-black">{states? 'confirm' : 'Pending'}</button></td>
      </tr>
    </div>
  );
};

export default OrderCard;
