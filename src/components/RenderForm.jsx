import { useState, useEffect } from 'react';
// import axios from 'axios';

function RenderForm(props) {
  /**
   * Read user input from InputForm component.
   * Perform GET request based on user input
   * Render response from GET request
   * @param {string} props.userInput is passed in and used for GET request
   * @return {string} JSON object is returned as a string
   */

  const currentInput = props.userInput;

  const [schema, setSchema] = useState();

  const URL = 'https://raw.githubusercontent.com/AllenNeuralDynamics/data_schema/main/schemas';

  useEffect(() => {
    if (currentInput == null || currentInput === '') {
      return;
    }
    fetch(`${URL}/${currentInput}.json`)
      .then((results) => results.json())
      .then((data) => {
        setSchema(data);
      });
  }, [currentInput]);
  return (
    <pre id="json">
      {JSON.stringify(schema, null, 4)}
    </pre>
  );
}

export default RenderForm;
