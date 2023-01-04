import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './MovieList.module.css';
const MoviesList = ({ movies, location }) => {
  return (
    <>
      <h2 className={css.moviesListTitle}>Trending today</h2>
      <ul className={css.movieList}>
        {movies.map(movie => (
          <li className={css.movieListItem} key={movie.id}>
            <Link
              className="movieLink"
              to={`/movies/${movie.id}`}
              state={{ from: location }}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  location: PropTypes.object.isRequired,
};

export default MoviesList;
