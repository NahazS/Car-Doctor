import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const ServiceCard = ({service}) => {

    const {_id,title,img,price} = service
    return (

        <Link to={`/services/${_id}`}>
            <div className="card bg-base-100 w-[364px] shadow-xl group overflow-hidden">
                <figure className="px-[25px] pt-[25px]">
                <img
                    src={img}
                    alt="Shoes"
                    className="rounded-xl h-[208px] group-hover:scale-110 transform transition-transform duration-300 overflow-hidden"
                />
                </figure>
                <div className="card-body">
                <h2 className="card-title text-[#444]">{title}</h2>
                <div className="card-actions justify-between items-center">
                    <p className="text-xl text-[#FF3811]">Price : ${price}</p>
                    <button className="btn btn-primary"><FaArrowRight/></button>
                </div>
                </div>
            </div>
        </Link>
    );
};

export default ServiceCard;
