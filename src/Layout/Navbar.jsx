import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoBagOutline, IoSearch } from "react-icons/io5";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <img className="h-[90px]" src="/assets/logo.svg" alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><NavLink to={'/'}>Home</NavLink></li>
          <li><NavLink to={'/about'}>About</NavLink></li>
          <li><NavLink to={'/services'}>Services</NavLink></li>
          <li><NavLink to={'/blog'}>Blog</NavLink></li>
          <li><NavLink to={'/contact'}>Contact</NavLink></li>
        </ul>
      </div>
      <div className="navbar-end">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <button className="btn"><HiOutlineMenuAlt3 className="text-2xl font-bold" /></button>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-32 p-2 shadow">
              <li><NavLink to={'/'}>Home</NavLink></li>
              <li><NavLink to={'/about'}>About</NavLink></li>
              <li><NavLink to={'/services'}>Services</NavLink></li>
              <li><NavLink to={'/blog'}>Blog</NavLink></li>
              <li><NavLink to={'/contact'}>Contact</NavLink></li>
          </ul>
        </div>
        <IoBagOutline className="text-2xl mr-5"></IoBagOutline>
        <IoSearch className="text-2xl mr-[30px]"> </IoSearch>
        <a className="btn border-[#FF3811] text-[#FF3811]">Appointment</a>
      </div>
    </div>
  );
};

export default Navbar;
