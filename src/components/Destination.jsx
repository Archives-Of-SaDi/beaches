import React from 'react';

function Destination() {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 text-center">
      <h1 className="text-3xl md:text-4xl font-bold">All-Inclusive Resorts</h1>
      <p className="py-4">On the Caribbean's Best Beaches</p>
      <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
        <img
          className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2"
          src="/img/borabora.jpg"
          alt=""
        />
        <img
          className="w-full h-full object-cover"
          src="/img/borabora2.jpg"
          alt=""
        />
        <img
          className="w-full h-full object-cover"
          src="/img/maldives.jpg"
          alt=""
        />
        <img
          className="w-full h-full object-cover"
          src="/img/maldives2.jpg"
          alt=""
        />
        <img
          className="w-full h-full object-cover"
          src="/img/keywest.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Destination;
