import React, { useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  FaInstagram,
} from 'react-icons/fa';

function Navbar() {
  const [nav, setNav] = useState(false);

  function handleNav() {
    setNav(!nav);
  }

  return (
    <div className="absolute top-0 w-full z-10 text-white flex justify-between items-center h-28 px-4">
      <div>
        <h1 className="uppercase text-3xl md:text-4xl font-bold">beaches.</h1>
      </div>
      <ul className="hidden md:flex">
        <li className="p-4 text-xl">Home</li>
        <li className="p-4 text-xl">Destinations</li>
        <li className="p-4 text-xl">Travel</li>
        <li className="p-4 text-xl">View</li>
        <li className="p-4 text-xl">Books</li>
      </ul>
      <div className="hidden md:flex">
        <BiSearch className="mx-2" size={20} />
        <BsPerson className="mx-2" size={20} />
      </div>
      <div onClick={handleNav} className="md:hidden z-10">
        {nav ? (
          <AiOutlineClose className="text-black" size={20} />
        ) : (
          <HiOutlineMenuAlt4 size={20} />
        )}
      </div>
      <div
        className={`absolute ${
          nav ? 'left-[0]' : 'left-[-100%]'
        } top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col text-black`}
      >
        <ul>
          <h1 className="uppercase text-3xl md:text-4xl font-bold mt-2">
            beaches.
          </h1>
          <li className="p-4 text-xl border-b">Home</li>
          <li className="p-4 text-xl border-b">Destinations</li>
          <li className="p-4 text-xl border-b">Travel</li>
          <li className="p-4 text-xl border-b">View</li>
          <li className="p-4 text-xl border-b">Books</li>
          <div className="flex flex-col">
            <button className="my-3 p-3 border bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white rounded-md">
              Search
            </button>
            <button className="my-3 p-3 border bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white rounded-md">
              Account
            </button>
          </div>
          <div className="flex justify-between my-6">
            <FaFacebook className="text-2xl cursor-pointer text-[#5651e5]" />
            <FaTwitter className="text-2xl cursor-pointer text-[#5651e5]" />
            <FaInstagram className="text-2xl cursor-pointer text-[#5651e5]" />
            <FaPinterest className="text-2xl cursor-pointer text-[#5651e5]" />
            <FaYoutube className="text-2xl cursor-pointer text-[#5651e5]" />
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
