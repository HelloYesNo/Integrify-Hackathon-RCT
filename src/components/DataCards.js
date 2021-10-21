import React from 'react';

export default function DataCards(data) {
  const { images, name, url, location, city, date } = data;
  const maps = `https://www.google.com/maps/place/${location}, ${city}`;

  // console.log('images', images);
  return (
    <div className='rounded-2xl overflow-hidden shadow-lg'>
      <img className='w-full' alt={name} src={images} />
      <div className='px-6 py-4'>
        <h1 className='self-center mb-6 text-xl'>{name}</h1>
        <h1 className='self-center mb-6 text-xl'>{date}</h1>
        <div>
          <a className='self-center mb-6 text-xl' href={url}>
            Website
          </a>
        </div>
        <a className='self-center mb-6 text-xl' href={maps}>
          {location}, {city}
        </a>
      </div>
    </div>
  );
}
