import React from 'react';
import useSelect from '../../apiHooks/useSelect';

export default function Place() {
  const { data, loading, error } = useSelect('places');
  //   console.log('Datataa is here in places', data);
  //   if (loading) return loading;
  //   if (error) throw error;
  return (
    <div>
      <h1>here is the activitie</h1>
    </div>
  );
}
