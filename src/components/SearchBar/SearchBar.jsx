import PropTypes from 'prop-types';
import css from './SearchBar.module.css';

const SearchBar = ({ value, onChange, onSubmit }) => {
  const handleFormSubmit = event => {
    event.preventDefault();
    onSubmit();
  };
  return (
    <form className={css.form} onSubmit={handleFormSubmit}>
      <input
        className={css.formInput}
        type="text"
        value={value}
        onChange={onChange}
      />
      <button className={css.formBtn} type="submit">
        Search
      </button>
    </form>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
