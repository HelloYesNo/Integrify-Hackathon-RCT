import React from 'react';
import useSelect from '../../apiHooks/useSelect';
import DataCards from '../DataCards';

export default function Activities() {
  const { data: needed_data, error, loading } = useSelect('activities');
  console.log('Data from activities', needed_data);
  if (loading) return loading;
  if (error) throw error;

  return (
    <div>
      <h1>Here is the activity </h1>
      {needed_data.data.length > 0 &&
        needed_data.data.map((item) => (
          <DataCards
            name={item.name.en}
            url={item.info_url}
            location={item.location.address.street_address}
            // images={item.description.images[0].url}
          />
        ))}
    </div>
  );
}
