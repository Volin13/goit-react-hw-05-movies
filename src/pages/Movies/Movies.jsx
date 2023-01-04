import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useLocation, useSearchParams } from 'react-router-dom';
import { CirclesWithBar } from 'react-loader-spinner';
import { options } from '../../constants/constants';
import SearchBar from '../../components/SearchBar/SearchBar';
import MoviesList from '../../components/MoviesList/MoviesList';
import { fetchSearch } from '../../services/fetchFilms';
import NotFound from 'pages/404/404';
const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams('');
  const query = searchParams.get('query') ?? '';
  const [searchKey, setSearchQuery] = useState(query);

  const searchedMovies = useQuery({
    queryKey: [searchKey],
    queryFn: fetchSearch,
  });
  const movies = searchedMovies?.data?.results;
  const loading = searchedMovies?.isFetching;

  const location = useLocation();

  const handleInputChange = ({ target }) => {
    setSearchParams(target.value ? { query: target.value } : {});
  };

  const handleFormSubmit = () => {
    setSearchQuery(query);
  };
  return (
    <>
      <div>
        <SearchBar
          value={query}
          onChange={handleInputChange}
          onSubmit={handleFormSubmit}
        />
      </div>
      {loading && <CirclesWithBar {...options} />}
      {movies?.length > 0 && <MoviesList movies={movies} location={location} />}
      {movies?.length === 0 && <NotFound />}
    </>
  );
};

export default Movies;
