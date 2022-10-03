import React from "react";
import "../../input.css";
import { images } from "../../constants";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <>
      <Navbar />
      <section>
        <div className="container flex flex-col-reverse mx-auto items-center md:flex-row">
          <div className="md:w-1/2">
            <img src={images.girl} alt="" />
          </div>
          <div className="flex flex-col space-y-12 md:w-1/2">
            <h1 className="max-w-md text-center text-4xl md:text-left md:text-5xl">
              Feel The Music
            </h1>
            <p className="max-w-sm text-center md:text-left">
              Stream over 20 thousand songs with one click
            </p>
            <Link to="/join"></Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
