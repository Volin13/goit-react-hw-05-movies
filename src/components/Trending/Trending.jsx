import { useQuery } from '@tanstack/react-query';
import { CirclesWithBar } from 'react-loader-spinner';
import { useLocation } from 'react-router-dom';
import { options } from '../../constants/constants';
import { fetchTrending } from '../../services/fetchFilms';
import MoviesList from '../MoviesList/MoviesList';

const Trending = () => {
  const trendingMovies = useQuery({
    queryKey: ['trending'],
    queryFn: fetchTrending,
  });
  const movies = trendingMovies?.data?.results;
  const loading = trendingMovies?.isFetching;
  const location = useLocation();

  return (
    <>
      {loading && <CirclesWithBar {...options} />}
      {movies?.length && <MoviesList movies={movies} location={location} />}
    </>
  );
};

export default Trending;
