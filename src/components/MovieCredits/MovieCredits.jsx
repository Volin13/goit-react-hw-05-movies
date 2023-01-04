import { useQuery } from '@tanstack/react-query';
import { CirclesWithBar } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
import { options } from '../../constants/constants';
import { fetchMovieCredits } from '../../services/fetchFilms';
import css from './MovieCredits.module.css';

const CastInfo = () => {
  const { movieId } = useParams();
  const castInfo = useQuery({
    queryKey: ['castInfo', movieId],
    queryFn: fetchMovieCredits,
  });
  const cast = castInfo?.data?.cast;
  const loading = castInfo?.isFetching;
  return (
    <div>
      <h3 className={css.castTitle}>Cast</h3>
      {loading && <CirclesWithBar {...options} />}
      {cast?.length === 0 && (
        <p>We don't have any information about this movie</p>
      )}
      {cast?.length > 0 && (
        <ul className={css.castList}>
          {cast.map(({ id, name, profile_path }) => (
            <li key={id} className={css.actor}>
              {profile_path && (
                <img
                  className={css.image}
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={name}
                />
              )}
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CastInfo;
