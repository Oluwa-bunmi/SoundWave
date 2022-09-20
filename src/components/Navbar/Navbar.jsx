import React, { useState } from "react";
import "./Navbar.css";
import { images } from "../../constants";
import { GrMenu } from "react-icons/gr";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
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

        <div className="smallScreenMenu">
          <GrMenu
            color="#fff"
            fontSize={27}
            onClick={() => setToggleMenu(true)}
          />

          {toggleMenu && (
            <div className="overlay">
              <GrClose
                color="#fff"
                fontSize={27}
                className="close"
                onClick={() => setToggleMenu(false)}
              />
              <ul className=" smallScreenLinks">
                <li>Discover</li>
                <li>Join</li>
              </ul>
            </div>
          )}
        </div>
        {/* 768 */}
      </nav>
    </header>
  );
};

export default Navbar;
