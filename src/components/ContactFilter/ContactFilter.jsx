import PropTypes from 'prop-types';
import css from './ContactFilter.module.css';

export const ContactFilter = ({ filter, handleChange }) => {
  return (
    <div>
      <label htmlFor="">Find contacts by name</label>
      <input
        className={css.filterName}
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};

ContactFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
