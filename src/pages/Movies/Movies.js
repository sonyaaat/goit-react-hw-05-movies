import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBox from 'components/SearchBox/SearchBox';
import MovieList from 'components/MovieList/MovieList';
import { findByName } from '../../api';
import Loader from 'components/Loader/Loader';
import css from "../Movies/Movies.module.css"
const Movies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [filmsList, setFilmsList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const stateQuery = searchParams.get('query') ?? '';
  useEffect(() => {
    if (stateQuery === '') {
      return;
    }
    setIsLoading(true);
    findByName(stateQuery)
      .then(response => {
        setFilmsList(response.data.results);
        if (response.data.results.length === 0) {
          alert('There is no results');
        }
      })
      .catch(error => console.log(error))
      .finally(setIsLoading(false));
  }, [query, stateQuery]);
  const onFind = query => {
    setSearchParams({ query });
    console.log(query);
    setQuery(query);
  };
  return (
    <div className={css.container}>
      {isLoading && <Loader />}
      <SearchBox onSubmit={onFind} />
      <MovieList movies={filmsList} />
    </div>
  );
};
export default Movies;
