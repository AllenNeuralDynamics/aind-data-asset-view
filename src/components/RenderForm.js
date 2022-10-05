import { useState, useEffect } from 'react';

function RenderForm() {
  /**
   *
   * Perform GET request 
   * Render response from GET request
   *  
   * @return {string} JSON object is returned as a string
   * 
   */
  
  const [schema, setSchema] = useState([]);
  
  const URL = 'http://localhost:8080/data_assets';

  useEffect(() => {
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

    getResponse() 
  }, [])

  // console.log(typeof schema[0]['created'])
  // {created: 1665001825, description: '', files: 31, id: '21a89214-0089-4db2-986f-d575fcb94edc', last_used: 0, …}

  const Header = ({ array }) => {
    let counter = 0

    // Use keys of first object for table header but if null or undefined, set to empty object
    const headers = Object.keys(array[0] ?? {});

    return headers.map((title) => {
      ++counter; 

      return (
        <th key={counter}>{title.toUpperCase()}</th>
      );
    });
  };
  
  const displayData = schema.map((info) => {
    return (
      <tr key={info.id}>
        <td>{info.created}</td>
        <td>{info.description}</td>
        <td>{info.files}</td>
        <td>{info.id}</td>
        <td>{info.last_used}</td>
        <td>{info.name}</td>
        <td>{info.size}</td>
        <td>{info.state}</td>
        <td>{info.tags}</td>
        <td>{info.type}</td>
      </tr>
    )
  })

  return (
    <table>
    <thead>
      <tr>
      <Header array={schema}></Header>
      </tr>
    </thead>
    <tbody>
    {displayData}
    </tbody>
    </table>
  )
};

export default RenderForm;
