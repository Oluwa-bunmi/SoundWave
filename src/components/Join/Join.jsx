import React from "react";
import "../../input.css";
const Join = () => {
  const url = "https://www.google.com/";
  return (
    <section className="bg-[#2F303A]">
      <div className="container mx-auto flex flex-col items-center pt-10 text-white md:flex-row ">
        <div className="mb-8 md:mb-0 text-center md:w-1/2">
          <h1 className="text-4xl md:text-6xl">
            JOIN THE <span className="text-[#BC3A80]">FUN. </span>
          </h1>
        </div>
        <div className="bg-[#202027]  rounded px-8 pt-6 pb-8 w-full mx-4 md:mb-16 md:w-1/2 md:px-10">
          <form action={url}>
            <div>
              <label class="block text-base font-medium text-white">
                Name:
              </label>
              <input
                type="text"
                class="block w-full hover:text-white px-3 py-2 rounded-md mt-2 bg-[#202027] border-borderColor"
              />
              <p class="mt-2 invisible peer-invalid:visible text-red-600 text-sm">
                Please provide a value for this field.
              </p>
            </div>
            <div>
              <label class="block text-base font-medium text-white">
                Email:
              </label>
              <input
                type="email"
                class="block w-full px-3 py-2 hover:text-white rounded-md mt-2 bg-[#202027] border-borderColor"
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
                class="block w-full px-3 py-2 hover:text-white rounded-md mt-2 bg-[#202027] border-borderColor"
              />
              <p class="mt-2 invisible peer-invalid:visible text-red-600 text-sm">
                Please provide a value for this field.
              </p>
            </div>
            <button
              class="bg-pryblue hover:bg-blue-500  text-white font-bold py-2 px-3 rounded mt-4 mb-4 w-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              JOIN NOW
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Join;
