import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from "../MovieList/MovieList.module.css"
const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(({ id, title }) => (
        <Link
          className={css.link}
          state={{ from: location }}
          to={`/movies/${id}`}
          key={id}
        >
          {title}
        </Link>
      ))}
    </ul>
  );
};
export default MovieList;
MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};
