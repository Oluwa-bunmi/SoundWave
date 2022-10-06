import React, { useState } from "react";
import "../../input.css";
import { images } from "../../constants";
import { Link } from "react-router-dom";

import { GrMenu, GrClose } from "react-icons/gr";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggle = () => {
    setToggleMenu(!toggleMenu)
  }
  return (
    <header className="bg-[#2F303A]">
      <nav className="container mx-auto p-6 flex justify-between items-center text-white">
        <Link to="/" className="flex items-center">
          <img src={images.logo} alt="logo" className="w-12 mr-2" />
          <h1 className="text-2xl  ">SOUNDWAVE</h1>
        </Link>
        <div>
          <ul className="hidden md:flex space-x-20">
            <li className="text-2xl ">
              <Link to="/discover"> Discover</Link>
            </li>
            <li className="text-2xl ">
              <Link to="/join">Join</Link>
            </li>
          </ul>
        </div>
        <div onClick={handleToggle} className="block md:hidden">
          {!toggleMenu ? <GrClose size={25} /> : <GrMenu size={25} />}
        </div>

        <div
          className={
            !toggleMenu
              ? "fixed left-0 top-0 w-[60%] h-full bg-[#202027] ease-in-out duration-500 md:hidden"
              : "fixed left-[-100%]"
          }
        >
          <ul className="pt-20 uppercase ">
            <li className="text-2xl p-4 px-12  border-b border-gray-500">
              <Link to="/discover"> Discover</Link>
            </li>
            <li className="text-2xl p-4 px-12 pt-16 border-b border-gray-500">
              <Link to="/join">Join</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
