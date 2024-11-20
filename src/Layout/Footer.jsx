import React from "react";
import { FaGoogle,FaInstagram,FaTwitter,FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer bg-black text-white py-[130px] justify-center md:justify-normal md:px-[150px]">
      <aside>
        <img className="h-[90px]" src="/assets/footerLogo.png" alt="" />
        <p className="max-w-[283px]">Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .</p>
        <div className="text-white flex gap-x-[6px]">
            <div className="w-[34px] h-[34px] bg-[#4c4c4c] rounded-full flex items-center justify-center">
                <FaGoogle className="text-[13px]"></FaGoogle>
            </div>
            <div className=" w-[34px] h-[34px] bg-[#4c4c4c] rounded-full flex items-center justify-center">
                <FaTwitter></FaTwitter>
            </div>
            <div className=" w-[34px] h-[34px] bg-[#4c4c4c] rounded-full flex items-center justify-center">
                <FaInstagram></FaInstagram>
            </div>
            <div className=" w-[34px] h-[34px] bg-[#4c4c4c] rounded-full flex items-center justify-center">
                <FaLinkedin></FaLinkedin>
            </div>
        </div>
      </aside>
      <nav>
        <h6 className="footer-title">About</h6>
        <a className="link link-hover">Home</a>
        <a className="link link-hover">Service</a>
        <a className="link link-hover">Contact</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">Why Car Doctor</a>
        <a className="link link-hover">About</a>
      </nav>
      <nav>
        <h6 className="footer-title">Support</h6>
        <a className="link link-hover">Support Center</a>
        <a className="link link-hover">Feedback</a>
        <a className="link link-hover">Accesbility</a>
      </nav>
    </footer>
  );
};

export default Footer;
