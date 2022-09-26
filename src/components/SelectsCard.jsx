import React from 'react';

function SelectsCard({ bg, text }) {
  return (
    <div className="relative">
      <img className="w-full h-full object-cover" src={bg} alt="" />
      <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
        <p className="absolute left-4 bottom-4 text-xl text-white font-bold">
          {text}
        </p>
      </div>
    </div>
  );
}

export default SelectsCard;
