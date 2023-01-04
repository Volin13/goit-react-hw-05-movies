import axios from 'axios';

const axiosTMDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '7b2efbb0092a20995d3e7f987f4421d9',
  },
});

export const fetchTrending = async () => {
  const { data } = await axiosTMDB.get('trending/movie/week');
  return data;
};
export const fetchSearch = async ({ queryKey }) => {
  const query = queryKey[0];
  if (!query) return null;
  const { data } = await axiosTMDB.get('search/movie', {
    params: { query },
  });
  return data;
};
export const fetchMovieDetails = async ({ queryKey }) => {
  const movieId = queryKey[1];
  const { data } = await axiosTMDB.get(`/movie/${movieId}`);
  return data;
};
export const fetchMovieCredits = async ({ queryKey }) => {
  const movieId = queryKey[1];
  const { data } = await axiosTMDB.get(`/movie/${movieId}/credits`);
  return data;
};
export const fetchMovieReviews = async ({ queryKey }) => {
  const movieId = queryKey[1];
  const { data } = await axiosTMDB.get(`/movie/${movieId}/reviews`);
  return data;
};
