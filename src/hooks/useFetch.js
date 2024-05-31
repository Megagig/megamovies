import { useState, useEffect } from 'react';

export const useFetch = (apiPath) => {
  const [data, setData] = useState([]);
  const url = ` https://api.themoviedb.org/3/${apiPath}?api_key=c012f0436866bbf5f024bee3107b5b7d`;

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
