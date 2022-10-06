import React from "react";
import "../../input.css";
import { images } from "../../constants";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const Discover = () => {
    return (
      <section className="bg-[#2F303A]">
        <div className="container mx-auto  flex flex-col pt-10 items-center text-white text-center md:text-left md:flex-row   ">
          <div className="mb-8 md:w-1/2 md:mb-0 px-4">
            <h1 className="text-4xl  lg:text-5xl">
              Discover new music
            </h1>
            <div className="flex py-10 justify-center md:justify-start">
              <img src={images.charts} alt="" className=" w-[70px]" />
              <img src={images.album} alt="" className=" w-[70px]" />
              <img src={images.more} alt="" className="w-[70px] " />
            </div>
            <p className="text-lg ">
              By Joining you can benefit by listening to the latest albums
              released
            </p>
          </div>
          <div className="md:w-1/2">
            <img src={images.colorful} alt="" />
          </div>
        </div>
      </section>
    );
}
 
export default Discover;