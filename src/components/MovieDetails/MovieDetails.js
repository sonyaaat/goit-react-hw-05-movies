import { Suspense, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { findDetails } from '../../api';
import { Link, Outlet ,NavLink} from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import css from '../MovieDetails/MovieDetails.module.css';
import img from '../../default.png';
const MovieDetails = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    findDetails(movieId)
      .then(response => {
        setMovie(response.data);
      })
      .catch(error => console.log(error))
      .finally(setIsLoading(false));
  }, [movieId]);
  const backLink = location.state?.from ?? '/home';
  if (!movie) {
    return;
  }
  const { original_title, poster_path, vote_average, overview, genres } = movie;
  return (
    <div className={css.container}>
      <Link className={css.button} to={backLink}>
        Go back
      </Link>
      {isLoading && <Loader />}
      <div className={css.wrapper}>
        <img
        className={css.img}
          src={
            poster_path ? `https://image.tmdb.org/t/p/w300/${poster_path}` : img
          }
          alt={original_title}
        />
        <div>
          <h2 >{original_title}</h2>
          <p>User score : {vote_average}</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <ul>
            {genres.map(({ id, name }) => (
              <li className={css.genre} key={id}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <h2>Additional Information</h2>
        <NavLink className={({isActive})=>!isActive?css.link:css.link__active} to={'cast'}>Cast</NavLink>
        <NavLink className={({isActive})=>!isActive?css.link:css.link__active} to={'reviews'}>Reviews</NavLink>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default MovieDetails;
