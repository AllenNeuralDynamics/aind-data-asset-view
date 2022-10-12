import { useState } from 'react';
import PropTypes from 'prop-types';

const sortFieldOptions = ['Created', 'Type', 'Name', 'Size'];

function InputForm({ handleData }) {
  /**
   * Function to read user input from form submit, update state, and pass to parent component.
   * @param {func} handleData
   * @return {string} userInput
   */

  const [userInput, setUserInput] = useState('');
  const [selectedField, setSelectedField] = useState(sortFieldOptions[0]);
  const [sortBy, setSortBy] = useState('');

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    handleData(userInput);
  };

  const sortSubmit = () => {
    console.log(selectedField);
    console.log(sortBy);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={userInput} onChange={handleChange} />
      {/* Sort By dropdown */}
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      {/* Sort Field dropdown */}
      <select value={selectedField} onChange={(e) => setSelectedField(e.target.value)}>
        {sortFieldOptions.map((value) => (
          <option value={value} key={value}>{value}</option>
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
