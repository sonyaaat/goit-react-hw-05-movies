import { useState } from 'react';
import PropTypes from 'prop-types';
const SearchBox = ({ onSubmit }) => {
  const [inputMovie, setInputMovie] = useState('');
  const handleChange = evt => {
    setInputMovie(evt.currentTarget.value.toLowerCase());
  };
  const handleSubmit = evt => {
    setInputMovie('');
    evt.preventDefault();
    onSubmit(inputMovie);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input value={inputMovie} type="text" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};
export default SearchBox;
SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
