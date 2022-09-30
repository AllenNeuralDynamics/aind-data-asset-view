import { useState } from 'react';
import PropTypes from 'prop-types';
// import RenderForm from './RenderForm';

function InputForm({ handleData }) {
  /**
   * Function to read user input from input form and passes user input to RenderForm component
   * @param {func} handleData is passed to InputForm as a prop
   * @return {string} userInput is passed to RenderForm as a prop
   */

  const [userInput, setUserInput] = useState('');

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    handleData(userInput);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={userInput} onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}

InputForm.propTypes = {
  handleData: PropTypes.func.isRequired,
};

export default InputForm;
