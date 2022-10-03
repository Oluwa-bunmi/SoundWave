import React from "react";
import "../../input.css";
import { images } from "../../constants";
// import { GrMenu } from "react-icons/gr";
// import { GrClose } from "react-icons/gr";

const Navbar = () => {
  // const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <nav className="container mx-auto p-6 flex justify-between items-center">
        <div className="flex items-center">
          <img src={images.logo} alt="logo" className="w-12 mr-2" />
          <h1 className="text-2xl  text-white">SOUNDWAVE</h1>
        </div>
        <div>
          <ul className="hidden md:flex space-x-20">
            <li className="text-2xl text-white">Discover</li>
            <li className="text-2xl text-white">Join</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
