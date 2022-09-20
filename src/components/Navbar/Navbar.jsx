import React from "react";
import "./Navbar.css";
import { images } from "../../constants";

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={images.logo} alt="Logo" />
        <h2>SOUNDWAVE</h2>
      </div>
      <div className="navLinks">
        <a href="">Discover</a>
        <a href="">Join</a>
      </div>
    </nav>
  );
};

export default Navbar;
