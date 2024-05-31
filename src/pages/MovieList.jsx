import { useState, useEffect } from 'react';
import { Card } from '../components/Card';

export const MovieList = () => {
  const [movies, setMovies] = useState([]);

  //Fetch movies using the useEffect hook on the first run
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=c012f0436866bbf5f024bee3107b5b7d'
      );
      const data = await response.json();
      setMovies(data.results);
    };
    fetchMovies();
  }, []);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
