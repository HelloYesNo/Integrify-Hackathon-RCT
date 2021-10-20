import React from 'react';
import useSelect from '../../apiHooks/useSelect';

export default function Events() {
  const { data, loading, error } = useSelect('events');

  // console.log('Datataa is here in the event', data);
  // if (loading) return loading;
  // if (error) throw error;

  return (
    <div>
      <h1>here is the events</h1>
    </div>
  );
}
