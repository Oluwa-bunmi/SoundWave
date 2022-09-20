import React from "react";
import "./Navbar.css";
import { images } from "../../constants";
import { GrMenu } from "react-icons/gr";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div>
          <img src={images.logo} alt="Logo" />
          <h2>SOUNDWAVE</h2>
        </div>

        <ul className="navLinks">
          <li>Discover</li>
          <li>Join</li>
        </ul>

        <div className="menu">
          <GrMenu color="#fff" fontSize={27} />
          <div className="overlay">
            <GrClose color="#fff" fontSize={27} />
          </div>
          <ul className="smallScreenLinks">
            <li>Discover</li>
            <li>Join</li>
          </ul>
        </div>
        {/* 768 */}
      </nav>
    </header>
  );
};

export default Navbar;
