import { useState } from 'react';
// import RenderForm from './RenderForm';

function InputForm(props) {
  /**
   * Function to read user input from input form and passes user input to RenderForm component
   * @return {string} userInput is passed to RenderForm as a prop
   */

  const [userInput, setUserInput] = useState('');

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.handleData(userInput);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={userInput}
        onChange={handleChange}
      />
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default InputForm;
