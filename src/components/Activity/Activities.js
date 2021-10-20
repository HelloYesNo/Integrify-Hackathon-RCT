import React from 'react';
import useSelect from '../../apiHooks/useSelect';

export default function Activities() {
  const { data, error, loading } = useSelect('activities');
  console.log('Data from activities', data);
  if (loading) return loading;
  if (error) throw error;
  return (
    <div>
      <h1>Here is the activity </h1>
      {data.length > 0 && data.map((data1) => <h1>{data1.name.en}</h1>)}
    </div>
  );
}
