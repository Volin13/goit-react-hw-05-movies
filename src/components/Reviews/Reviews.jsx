import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { CirclesWithBar } from 'react-loader-spinner';
import { options } from '../../constants/constants';
import { fetchMovieReviews } from '../../services/fetchFilms';
import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const reviewsInfo = useQuery({
    queryKey: ['reviewsInfo', movieId],
    queryFn: fetchMovieReviews,
  });
  const reviews = reviewsInfo?.data?.results;
  const loading = reviewsInfo?.isFetching;
  return (
    <div className={css.reviewInfo}>
      {loading && <CirclesWithBar {...options} />}
      {reviews?.length === 0 && (
        <span>We dont have any reviews for this movie.</span>
      )}
      {reviews?.length > 0 && (
        <ul className={css.reviewList}>
          {reviews.map(({ id, author, content }) => (
            <li key={id} className={css.reviewItem}>
              <h3 className={css.reviewTitle}>Athor: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
