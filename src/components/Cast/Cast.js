import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { findCast } from '../../api';
import img from '../../default.png';
const Cast = () => {
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  useEffect(() => {
    setIsLoading(true);
    findCast(movieId)
      .then(response => setCast(response.data.cast))
      .catch(error => console.log(error))
      .finally(setIsLoading(false));
  }, [cast, movieId]);

  if (!cast) {
    return;
  }
  return (
    <>
      {isLoading && <Loader />}
      {cast.length > 0 ? (
        <ul>
          {cast.map(({ id, original_name, profile_path, character }) => {
            return (
              <li key={id}>
                <img
                  width={200}
                  height={300}
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                      : img
                  }
                  alt={original_name}
                />
                <p>
                  <b>{original_name}</b>
                </p>
                <p>Character: {character}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don`t have any information about cast</p>
      )}
    </>
  );
};
export default Cast;
