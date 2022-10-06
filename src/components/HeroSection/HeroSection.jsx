import React from "react";
import "../../input.css";
import { images } from "../../constants";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <div className="bg-pattern bg-center bg-cover">
      {/* <Navbar /> */}
      <section className="pt-10 ">
        <div className="container flex flex-col-reverse mx-auto items-center md:flex-row">
          <div className="md:w-1/2">
            <img src={images.girl} alt="girl" className="w-[400px]" />
          </div>
          <div className="flex flex-col text-white mb-8 md:mb-0  md:w-1/2">
            <h1 className="max-w-md  text-center text-4xl md:text-left md:text-5xl">
              Feel The Music
            </h1>
            <p className="max-w-sm  text-center md:text-left text-lg py-6">
              Stream over 20 thousand songs with one click
            </p>
            <div className="flex justify-center md:justify-start">
              <Link to="/join" className=" bg-pryblue p-3 rounded-md  ">
                JOIN NOW
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
