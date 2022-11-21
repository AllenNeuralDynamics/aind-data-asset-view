import PropTypes from 'prop-types';

function InputForm({ handleData }) {
  /**
   * Function to read user input from form submit, update state, and pass to parent component.
   * @param {func} handleData
   * @return {string} userInput
   */

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataObject = Object.fromEntries(formData.entries());
    handleData(formDataObject);
  };

  return (
    <form onSubmit={handleSubmit} data-testid="form">
      <select name="type" defaultValue="" data-testid="select-type">
        <option value="result">Result</option>
        <option defaultValue="dataset">Dataset</option>
        <option defaultValue="">Both</option>
      </select>
      <button type="submit" data-testid="submit-btn" aria-hidden="true">
        Submit
      </button>
    </form>
  );
}

InputForm.propTypes = {
  handleData: PropTypes.func,
};
InputForm.defaultProps = {
  handleData: undefined,
};

export default InputForm;
