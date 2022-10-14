import { useState } from 'react';
import PropTypes from 'prop-types';

const sortFieldOptions = ['Created', 'Type', 'Name', 'Size'];

const defaultParams = {
  start: 0,
  limit: 10,
  sort_field: '',
  sort_order: '',
  type: '',
};

function InputForm({ handleData }) {
  /**
   * Function to read user input from form submit, update state, and pass to parent component.
   * @param {func} handleData
   * @return {string} userInput
   */

  const [userInput, setUserInput] = useState(defaultParams);

  const handleChange = (event) => {
    setUserInput({ ...userInput, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    handleData(userInput);
  };

  const sortSubmit = () => {
    console.log('Clicked!');
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Type dropdown */}
      <select name="type" value={userInput.type} onChange={handleChange}>
        <option value="result">Result</option>
        <option value="dataset">Dataset</option>
      </select>
      {/* Start and Limit for search index */}
      <input name="start" value={userInput.value} type="number" placeholder="Start" min="0" max="30" onChange={handleChange} />
      <input name="limit" value={userInput.value} type="number" placeholder="Limit" min="0" max="30" onChange={handleChange} />
      {/* Sort order dropdown */}
      <select name="sort_order" value={userInput.sort_order} onChange={handleChange}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      {/* Sort Field dropdown */}
      <select name="sort_field" value={userInput.sort_field} onChange={handleChange}>
        {sortFieldOptions.map((value) => (
          <option value={value.toLowerCase()} key={value}>{value}</option>
        ))}
      </select>
      <button type="submit" onClick={sortSubmit}>
        Submit
      </button>
    </form>
  );
}

InputForm.propTypes = {
  handleData: PropTypes.func.isRequired,
};

export default InputForm;
