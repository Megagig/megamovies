import { Link } from 'react-router-dom';
import PageNotFoundImage from '../assets/pagenotfound.png';
export const PageNotFound = () => {
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
            <button className="w-64 text-xl text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg px-5 py-2.5">
              Back to Megamovies
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};
