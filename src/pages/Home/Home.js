import { useEffect, useState } from 'react';
import css from "../Home/Home.module.css"
import MovieList from 'components/MovieList/MovieList';
import { popularList } from '../../api';
import Loader from 'components/Loader/Loader';
const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    popularList()
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => console.log(error))
      .finally(setIsLoading(false));
  }, []);
  return (
    <main className={css.container}>
      <h1 className={css.title}>Trending today</h1>
      {isLoading && <Loader />}
      {movies && <MovieList movies={movies} />}
    </main>
  );
};
export default Home;
