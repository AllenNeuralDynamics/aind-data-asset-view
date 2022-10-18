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
    <form onSubmit={handleSubmit}>
      <select name="type" defaultValue="">
        {/* <option value="result">Result</option> */}
        <option defaultValue="dataset">Dataset</option>
      </select>
      <input name="start" type="number" min="0" max="30" defaultValue="0" />
      <input name="limit" type="number" min="0" max="200" defaultValue="0" />
      <select name="sort_order">
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <select name="sort_field">
        {sortFieldOptions.map((value) => (
          <option defaultValue={value.toLowerCase()} key={value}>{value}</option>
        ))}
      </select>
      <button type="submit">
        Submit
      </button>
    </form>
  );
}

InputForm.propTypes = {
  handleData: PropTypes.func.isRequired,
};

export default InputForm;
