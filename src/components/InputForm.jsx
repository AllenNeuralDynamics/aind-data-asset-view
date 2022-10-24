import PropTypes from 'prop-types';

const sortFieldOptions = ['Created', 'Type', 'Name', 'Size'];

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
        {/* <option value="result">Result</option> */}
        <option defaultValue="dataset">Dataset</option>
      </select>
      <input name="start" type="number" min="0" max="30" defaultValue="0" data-testid="start-index" />
      <input name="limit" type="number" min="0" max="200" defaultValue="0" data-testid="limit-index" />
      <select name="sort_order" data-testid="select-sort-order">
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <select name="sort_field" data-testid="select-sort-field">
        {sortFieldOptions.map((value) => (
          <option defaultValue={value.toLowerCase()} key={value}>{value}</option>
        ))}
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
