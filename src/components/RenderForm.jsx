import { useState, useEffect } from 'react';
// import RenderRow from './RenderRow';
import PropTypes from 'prop-types';

function RenderForm({ userInput }) {
  /**
   * Perform GET request
   * Render response from GET request
   * @return {React.ReactComponentElement} Table header and rows
   */
  const wasClicked = userInput;
  const [schema, setSchema] = useState([]);
  const URL = 'http://localhost:8080/data_assets';

  const getResponse = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setSchema(data);
  };

  useEffect(() => {
    getResponse();
  }, [userInput]);

  if (wasClicked) {
    return (
      <pre id="json">{JSON.stringify(schema, null, 4)}</pre>
    );
  }
  return (
    <p />
  );
}

RenderForm.propTypes = {
  userInput: PropTypes.string.isRequired,
};

export default RenderForm;
