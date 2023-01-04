import { useQuery } from '@tanstack/react-query';
import React, { Suspense } from 'react';
import { CirclesWithBar } from 'react-loader-spinner';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { options } from '../../constants/constants';
import { fetchMovieDetails } from '../../services/fetchFilms';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const location = useLocation();
  const { movieId } = useParams();

  const movieDetails = useQuery({
    queryKey: ['movieDetails', movieId],
    queryFn: fetchMovieDetails,
  });
  const movieInfo = movieDetails?.data;
  const loading = movieDetails?.isFetching;
  if (!movieInfo)
    return (
      <div>
        <Link className={css.goBackLink} to={location?.state?.from ?? '/'}>
          &#8592; Go back
        </Link>
        {loading && <CirclesWithBar {...options} />}
      </div>
    );
  const defaultPath = '../../images/notFound.jpg';
  const { title, poster_path, vote_average, overview, genres = [] } = movieInfo;
  return (
    <div className={css.detailsMainContainer}>
      <Link className={css.goBackLink} to={location?.state?.from ?? '/'}>
        &#8592; Go back
      </Link>
      {movieInfo && (
        <>
          <div className={css.movieDescriptionContainer}>
            {poster_path ? (
              <img
                className="poster"
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={title}
              />
            ) : (
              <img src={defaultPath} alt="#" />
            )}
            <div className={css.movieDescription}>
              <h2>{title}</h2>
              <span>User score: {Math.ceil(vote_average * 10)}%</span>
              <h3>Overview:</h3>
              <span>{overview}</span>
              <h4>Genres:</h4>
              <span>{genres.map(({ name }) => name).join(', ')}</span>
            </div>
          </div>
          <div className={css.addInfoContainer}>
            <p className={css.addInfoTitle}>Additional information:</p>
            <ul className={css.addInfoList}>
              <li>
                <Link
                  to="cast"
                  className={css.addInfoItem}
                  state={{ from: location?.state?.from }}
                >
                  Cast
                </Link>
              </li>
              <li>
                <Link
                  to="reviews"
                  className={css.addInfoItem}
                  state={{ from: location?.state?.from }}
                >
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}
      <Suspense fallback={<CirclesWithBar {...options} />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
