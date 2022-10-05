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
  
  const [schema, setSchema] = useState(null);
  
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
      }
    }
    getResponse();
  }, [])
  
  // console.log(schema)
  // const headers = Object.keys(schema[0])
  // console.log(headers)

  // console.log(Object.keys(schema))

  // const getKeys = () => {
  //   return Object.keys(schema[0])
  // };

  // console.log(getKeys())

  // for (const element of schema) {
  //   console.log(element)
  //   return (
  //     <pre id='json'>{JSON.stringify(element)}</pre>
  //   )
  // }

  // const getHeader = () => {
  //   let keys = getKeys();

  //   return keys.map((key, index) => {
  //     return <th key={key}>{key.toUpperCase()}</th>
  //   })
  // }


  // for (let obj in schema) {
  //   console.log(obj)
  // }

  return (
    <pre id="json">{JSON.stringify(schema, null, 4)}</pre>
    // <div>
    //   <ul>
    //     {schema.map((data) => <li key={data.id}> {data.description}</li>)}
    //   </ul>
    // </div>
  );

  // return (
  //   <table>
  //     <thead>
  //       <tr>
  //         {getHeader()}
  //       </tr>
  //     </thead>
  //   </table>
  // )

  // const displaySchema = schema.map((info) => {
  //   return (
  //     <tr key={info.id}>
  //       <td>{info.id}</td>
  //       <td>{info.name}</td>
  //       <td>{info.state}</td>
  //       <td>{info.type}</td>
  //       <td>{info.tags}</td>
  //       <td>{info.created}</td>
  //     </tr>
  //   )
  // })

  // return (
  //   <table>
  //   <thead>
  //     <tr>
  //     <th>ID</th>
  //     <th>File name</th>
  //     <th>State</th>
  //     <th>Type</th>
  //     <th>Tags</th>
  //     <th>Created</th>
  //     </tr>
  //   </thead>
  //   <tbody>
  //   {displaySchema}
  //   </tbody>
  //   </table>
  // )
};

export default RenderForm;
