import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, FormControl, MenuItem, TextField } from '@mui/material';

function InputForm({ setTypeCallback, setQueryCallback }) {
  /**
   * Function to read user selection from dropdown and input from search bar then pass to parent component.
   * @param {func} setTypeCallback, setQueryCallback
   * @return {Object} { parameter: value }
   */

  useEffect(() => {
    setTypeCallback({ type: 'both' });
  }, []);

  const handleSearch = (event) => {
    setQueryCallback({ query: event.target.value });
  };

  const handleSelect = (event) => {
    setTypeCallback({ type: event.target.value });
  };

  return (
    <FormControl
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justtifyContent: 'space-around',
      }}
    >
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
      >
        <TextField
          fullwidth
          defaultValue="both"
          inputProps={{ 'data-testid': 'select-type' }}
          id="type-select"
          labelId="selectedOptionLabel"
          label="Select Data Asset Type"
          onChange={handleSelect}
          select
        >
          <MenuItem disabled value="disabled-default">
            Select Data Asset Type
          </MenuItem>
          <MenuItem value="both">All Data Assets</MenuItem>
          <MenuItem value="result">Result</MenuItem>
          <MenuItem value="dataset">Dataset</MenuItem>
        </TextField>

        <TextField
          color="secondary"
          defaultValue=""
          id="query-search"
          inputProps={{ 'data-testid': 'query-search-bar' }}
          label="Search all/title/author/tags"
          onChange={handleSearch}
          size="normal"
        />
      </Box>
    </FormControl>
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
