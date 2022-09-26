import React from 'react';
import SelectsCard from './SelectsCard';

function Selects() {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <SelectsCard bg={'/img/borabora.jpg'} text={'Bora Bora'} />
      <SelectsCard bg={'/img/borabora2.jpg'} text={'Maldives'} />
      <SelectsCard bg={'/img/maldives.jpg'} text={'Antigua'} />
      <SelectsCard bg={'/img/maldives2.jpg'} text={'Cozumel'} />
      <SelectsCard bg={'/img/maldives3.jpg'} text={'Jamaica'} />
      <SelectsCard bg={'/img/keywest.jpg'} text={'Key West'} />
    </div>
  );
}

export default Selects;
