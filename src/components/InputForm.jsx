import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Stack, TextField, Select, MenuItem } from '@mui/material';

function InputForm({ setTypeCallback, setQueryCallback }) {
  /**
   * Function to read user input from form submit, update sstate, and pass to parent component.
   * @param {func} setTypeCallback, setQueryCallback
   * @return {string} userInput
   */

  useEffect(() => {
    setTypeCallback({'type': 'both'})
  }, [])

  const handleSearch = (event) => {
    const inputText = event.target.value;
    console.log(inputText);
    setQueryCallback({'query' : inputText});
  };

  const handleSelect = (event) => {
    setTypeCallback({'type': event.target.value});
  }

  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction='row'>
      <Select
        id="type-select"
        label="Select Type"
        onChange={handleSelect}
      >
        <MenuItem value="both">Both</MenuItem>
        <MenuItem value="result">Result</MenuItem>
        <MenuItem value="dataset">Dataset</MenuItem>
      </Select>
      <TextField 
        label='Search all/title/author/tags'
        size='small'
        color='secondary'
        onChange={handleSearch}/>
      </Stack>
    </Stack>
  );
}

InputForm.propTypes = {
  setTypeCallback: PropTypes.func,
  setQueryCallback: PropTypes.func,
};

InputForm.defaultProps = {
  setTypeCallback: undefined,
  setQueryCallback: undefined,
};

export default InputForm;
