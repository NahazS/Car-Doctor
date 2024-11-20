import React, { useContext } from "react";
import { FaGoogle,FaInstagram,FaTwitter,FaLinkedin } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
const TeamSlide = ({slide}) => {
//   const {currentSlide} = useContext(AuthContext)
  return (

    <div className="card bg-base-100 max-w-[364px] min-h-[487px] shadow-xl hover:shadow-2xl">
      <figure className="px-[25px] pt-[25px]">
        <img
          src={`/assets/images/team/${slide}.jpg`}
          alt="Shoes"
          className="rounded-xl w-[314px] h-[293px]"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Car Engine Plug</h2>
        <p>Engine Expert</p>
        <div className="card-actions">
          <FaGoogle className="text-[40px]"></FaGoogle>
          <FaInstagram className="text-[40px]"></FaInstagram>
          <FaTwitter className="text-[40px]"></FaTwitter>
          <FaLinkedin className="text-[40px]"></FaLinkedin>
        </div>
      </div>
    </div>

  );
};

export default TeamSlide;
