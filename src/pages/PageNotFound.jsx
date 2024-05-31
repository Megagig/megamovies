import { Link } from 'react-router-dom';
import PageNotFoundImage from '../assets/pagenotfound.png';
import { Button } from '../components/Button';
import { useEffect } from 'react';
export const PageNotFound = () => {
  //dynamic page title
  useEffect(() => {
    document.title = `404 Page Not Found - Megamovies`;
  }, []);

  return (
    <main>
      <section className="flex flex-col justify-center px-3">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl  font-bold my-10 dark: text-white">
            404 Oops!
          </p>
          <div className="max-w-lg">
            <img
              className="rounded"
              src={PageNotFoundImage}
              alt="404 Page Not Found"
            />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <Button>Back to Megamovies</Button>
            <Button>Back to Home</Button>
          </Link>
        </div>
      </section>
    </main>
  );
};
