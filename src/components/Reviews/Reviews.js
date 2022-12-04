import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { findReviews } from '../../api';

const Reviews = () => {
  const [reviews, setReviews] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  useEffect(() => {
    setIsLoading(true);
    findReviews(movieId)
      .then(response => setReviews(response.data.results))
      .catch(error => console.log(error))
      .finally(setIsLoading(false));
  }, [reviews, movieId]);
  if (!reviews) {
    return;
  }
  return (
    <>
      {isLoading && <Loader />}
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <p>
                <b>Author:</b> {author}
              </p>
              <p> {content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
};
export default Reviews;
