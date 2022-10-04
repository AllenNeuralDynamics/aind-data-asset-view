import { useState, useEffect } from 'react';

function RenderForm() {
  /**
   * Read user input from InputForm component.
   * Perform GET request based on user input
   * Render response from GET request
   * 
   * @param {string} userInput is passed in and used for GET request
   * @return {string} JSON object is returned as a string
   * url = http://localhost:8080/data_assets
   */
  
  const [schema, setSchema] = useState();
  
  const URL = 'http://localhost:8080/data_assets';

  useEffect(() => {

    fetch(URL)
    .then(results => results.json())
    .then(data => {
      setSchema(data);
    });
  }, [])

  return (
    <pre id="json">{JSON.stringify(schema, null, 4)}</pre>
  );
};

export default RenderForm;
