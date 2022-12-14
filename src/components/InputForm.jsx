import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Stack, TextField } from '@mui/material';

function InputForm({ handleData }) {
  /**
   * Function to read user input from form submit, update state, and pass to parent component.
   * @param {func} handleData
   * @return {string} userInput
   */

  useEffect(() => {
    handleData({'type': 'both'})
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataObject = Object.fromEntries(formData.entries());
    handleData(formDataObject);
  };

  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction='row'>
      <form onSubmit={handleSubmit} data-testid="form">
        <select name="type" defaultValue="" data-testid="select-type">
          <option defaultValue="both">Both</option>
          <option value="result">Result</option>
          <option value="dataset">Dataset</option>
        </select>
        <button type="submit" data-testid="submit-btn" aria-hidden="true">
          Submit
        </button>
      </form>
      <TextField label='Search all/title/author/tags' size='small' color='secondary' />
      </Stack>
    </Stack>
  );
}

InputForm.propTypes = {
  handleData: PropTypes.func,
};

InputForm.defaultProps = {
  handleData: undefined,
};

export default InputForm;
