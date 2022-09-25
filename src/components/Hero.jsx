import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

function Hero() {
  return (
    <div className="w-full h-screen relative">
      <video
        className="w-full h-full object-cover"
        src="/vid/beach.mp4"
        autoPlay
        loop
        muted
      ></video>
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30"></div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
        <h1 className="text-3xl md:text-4xl font-bold">First Class Travel</h1>
        <h2 className="text-3xl font-bold py-4">Top 1% Locations Worldwide</h2>
        <form className="flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/90">
          <div>
            <input
              className="outline-none border-none bg-transparent w-[300px] sm:w-[400px]"
              type="text"
              placeholder="Search Destinations"
            />
          </div>
          <div>
            <button className="my-3 p-3 border bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white rounded-md">
              <AiOutlineSearch
                className="text-2xl cursor-pointer text-white"
                size={20}
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Hero;
