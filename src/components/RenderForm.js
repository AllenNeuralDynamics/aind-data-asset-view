import { useState, useEffect } from 'react';
// import metadata from '../metadata.json';

function RenderForm() {
  /**
   * Read user input from InputForm component.
   * Perform GET request based on user input
   * Render response from GET request
   *  
   * @param {string} userInput is passed in and used for GET request
   * @return {string} JSON object is returned as a string
   * url = http://localhost:8080/data_assets
   * 
   * metadata is an object of objects: {{},{},{}, ...}
   * response from localhost is array of objects: [{},{},{},...]
   */
  
  const [schema, setSchema] = useState([]);
  
  const URL = 'http://localhost:8080/data_assets';

  useEffect(() => {

    // if (userInput === null || userInput === ''){
    //   return;
    // }

    async function getResponse() {
      const response = await fetch(URL, {
        method: 'GET',
        headers: {
          accept: 'application/json',
        },
      });
      const data = await response.json();

      if (data['has_more']) {
        setSchema(data['results']);
        // console.log(data)
      }
    }
    getResponse();
  }, [])
  
  // an object of objects
  // {has_more: true, results: [{},{},{}]}
  // console.log(metadata)

  // an array of objects
  // when schema = data['results'] then schema = [{"created": 123124, "files": 33, "last_used": 0,...},{}, {}, ...]
  // console.log(schema)


  
  const displaySchema = schema.map((info) => {
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
    {displaySchema}
    </tbody>
    </table>
  )
};

export default RenderForm;
