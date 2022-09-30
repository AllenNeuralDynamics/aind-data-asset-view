import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function RenderForm({ userInput }) {
  /**
   * Read user input from InputForm component.
   * Perform GET request based on user input
   * Render response from GET request
   * @param {string} userInput is passed in and used for GET request
   * @return {string} JSON object is returned as a string
   */

  const [schema, setSchema] = useState();

  const URL = 'https://raw.githubusercontent.com/AllenNeuralDynamics/data_schema/main/schemas';

  useEffect(() => {
    if (userInput == null || userInput === '') {
      return;
    }
    fetch(`${URL}/${userInput}.json`)
      .then((results) => results.json())
      .then((data) => {
        setSchema(data);
      });
  }, [userInput]);
  return <pre id="json">{JSON.stringify(schema, null, 4)}</pre>;
}

RenderForm.propTypes = {
  userInput: PropTypes.string.isRequired,
};

export default RenderForm;
