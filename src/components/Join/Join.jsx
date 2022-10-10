import React from "react";
import "../../input.css";
import { images } from "../../constants";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const Join = () => {
  const url = "https://www.google.com/";
  return (
    <div className="flex flex-col items-center  md:flex-row">
      <div className="md:w-1/2">
        <h1>
          JOIN THE <span className="text-[#BC3A80]">FUN </span>
        </h1>
      </div>
      <div className="bg-black shadow-md rounded px-8 pt-6 pb-8">
        <form onSubmit={url}>
          <div>
            <label class="block text-base font-medium text-white">Name:</label>
            <input
              type="text"
              class="block w-full hover:text-white px-3 py-2 rounded-md mt-2 bg-black border-borderColor"
            />
            <p class="mt-2 invisible peer-invalid:visible text-red-600 text-sm">
              Please provide a value for this field.
            </p>
          </div>
          <div>
            <label class="block text-base font-medium text-white">Email:</label>
            <input
              type="email"
              class="block w-full px-3 py-2 hover:text-white rounded-md mt-2 bg-black border-borderColor"
            />
            <p class="mt-2 invisible peer-invalid:visible text-red-600base">
              Please provide a value for this field.
            </p>
          </div>
          <div>
            <label class="block text-base font-medium text-white">
              Password:
            </label>
            <input
              type="password"
              class="block w-full px-3 py-2 hover:text-white rounded-md mt-2 bg-black border-borderColor"
            />
            <p class="mt-2 invisible peer-invalid:visible text-red-600 text-sm">
              Please provide a value for this field.
            </p>
          </div>
          <button
            class="bg-pryblue hover:bg-blue-500  text-white font-bold py-2 px-3 rounded mt-4 w-full focus:outline-none focus:shadow-outline"
            type="submit"
          >
            JOIN NOW
          </button>
        </form>
      </div>
    </div>
  );
};

export default Join;
