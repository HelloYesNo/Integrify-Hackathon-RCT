import React from 'react';

export default function DataCards(data) {
  const { images, name, url, location, date } = data;

  return (
    <div className='absolut flex flex-col w-full max-w-md px-4 py-8 m-5 ring-1 ring-gray-400 bg-white rounded-3xl shadow-lg'>
      <h1 className='self-center mb-6 text-xl'>{name}</h1>
      <h1 className='self-center mb-6 text-xl'>{date}</h1>
      <h1 className='self-center mb-6 text-xl'>{url}</h1>
    </div>
  );
}
