import { useSearchParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { Card } from '../components/Card';

export const Search = ({ apiPath }) => {
  const [SearchParams] = useSearchParams();
  const search = SearchParams.get('query');
  const { data: movies } = useFetch(apiPath, search);
  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-gray-700">
          {movies.length === 0
            ? `No result found for "${search}"`
            : `Search result for "${search}"`}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7 dark:text-white">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
