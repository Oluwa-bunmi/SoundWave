import React from "react";
import "./Navbar.css";
import { images } from "../../constants";
import {GrMenu} from "react-icons/gr";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div>
          <img src={images.logo} alt="Logo" />
          <h2>SOUNDWAVE</h2>
        </div>
        <div className="navLinks">
          <a href="">Discover</a>
          <a href="">Join</a>
        </div>
        <div className="menu">
          <GrMenu />
        </div>
        {/* 768 */}
      </nav>
    </header>
  );
};

export default Navbar;
