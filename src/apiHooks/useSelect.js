import { useState, useEffect } from 'react';
// const baseUrl = 'https://open-api.myhelsinki.fi/v1/places/';

export default function useSelect(name) {
  let baseUrl = `https://open-api.myhelsinki.fi/v1/${name}/`;

  const [data, setData] = useState();
  console.log('Data here', data);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function init() {
      try {
        const response = await fetch(baseUrl);
        if (response.ok) {
          const json = await response.json();
          setData(json);
        }
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, [baseUrl]);
  return { data, loading, error };
}
