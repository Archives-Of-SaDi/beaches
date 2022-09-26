import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  FaInstagram,
} from 'react-icons/fa';

function Footer() {
  return (
    <div className="w-full bg-gray-100 py-16">
      <div className="max-w-[1240px] mx-auto flex flex-col px-4">
        <div className="sm:flex text-center justify-between items-center">
          <h1 className="uppercase text-3xl md:text-4xl font-bold">beaches.</h1>
          <div className="flex justify-between w-full sm:max-w-[200px] my-4">
            <FaFacebook className="text-2xl cursor-pointer text-[#5651e5]" />
            <FaTwitter className="text-2xl cursor-pointer text-[#5651e5]" />
            <FaInstagram className="text-2xl cursor-pointer text-[#5651e5]" />
            <FaPinterest className="text-2xl cursor-pointer text-[#5651e5]" />
            <FaYoutube className="text-2xl cursor-pointer text-[#5651e5]" />
          </div>
        </div>
        <div className="flex justify-between">
          <ul className="lg:flex">
            <li className="p-4 text-xl">About</li>
            <li className="p-4 text-xl">Partnerships</li>
            <li className="p-4 text-xl">Careers</li>
            <li className="p-4 text-xl">Newsroom</li>
            <li className="p-4 text-xl">Advertising</li>
          </ul>
          <ul className="text-right lg:flex">
            <li className="p-4 text-xl">Home</li>
            <li className="p-4 text-xl">Destinations</li>
            <li className="p-4 text-xl">Travel</li>
            <li className="p-4 text-xl">View</li>
            <li className="p-4 text-xl">Books</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
