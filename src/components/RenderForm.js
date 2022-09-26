// import { useState, useEffect } from 'react';
// import axios from 'axios';
import metadata from '../metadata';


function RenderForm(props) {
  /**
   * Read user input from InputForm component.
   * Perform GET request based on user input
   * Render response from GET request
   * 
   * @param {string} props.userInput is passed in and used for GET request
   * @return {string} JSON object is returned as a string
   */

  // const currentInput = props.userInput;

  // const [schema, setSchema] = useState();

  // const URL = 'https://raw.githubusercontent.com/AllenNeuralDynamics/data_schema/main/schemas';

  // useEffect(() => {
  //   if (currentInput == null || currentInput === '') {
  //     return;
  //   }
  //   fetch(`${URL}/${currentInput}.json`)
  //     .then(results => results.json())
  //     .then(data => {
  //       setSchema(data);
  //     });
  // }, [currentInput]);


  // const dataStringify = JSON.stringify(metadata, null, 4)
  console.log(metadata.results)

  const displayMetadata = metadata.results.map((info) => {
    return (
      <tr key={info.id}>
        <td>{info.id}</td>
        <td>{info.name}</td>
        <td>{info.state}</td>
        <td>{info.type}</td>
        <td>{info.tags}</td>
        <td>{info.created}</td>
      </tr>
    )
  })

    return (
      // Renders JSON file directly
      // <pre id="json">
      //   {dataStringify}
      // </pre>

      <table>
        <thead>
          <tr>
          <th>ID</th>
          <th>File name</th>
          <th>State</th>
          <th>Type</th>
          <th>Tags</th>
          <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {displayMetadata}
        </tbody>
      </table>
    )

};

export default RenderForm;
