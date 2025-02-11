import { useState, useEffect } from 'react';

export const useFetch = (apiPath, search = '') => {
  const [data, setData] = useState([]);
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${
    import.meta.env.VITE_APP_API_KEY
  }&query=${search}`;

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
    };
    fetchMovies();
  }, [url]);

  return { data };
};
