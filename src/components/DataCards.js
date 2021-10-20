import React from 'react';

export default function DataCards(data) {
  const { images, name, url, location, date } = data;

  return (
    <div className='flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10'>
      <h1>Events...</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
        incidunt assumenda deleniti odio exercitationem at dolores repudiandae
        accusantium ullam perferendis, aliquam, quidem tempora obcaecati dolore,
        cum debitis magni quae? Repellat.
      </p>
    </div>
  );
}
