import React, { useState, useEffect } from 'react';
import RenderRow from './RenderRow';

function RenderForm() {
  /**
   *
   * Perform GET request 
   * Render response from GET request
   *  
   * @return {React.ReactComponentElement} Table header and rows 
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

  const getKeys = () => {
    // Use keys of first object for table header but if null or undefined, set to empty object
    return Object.keys(schema[0] ?? {});
  }

  const getHeader = () => {
    let counter = 0
    let headers = getKeys();

    return headers.map((key) => {
      ++counter; 

      return (
        <th key={counter}>{key.toUpperCase()}</th>
      );
    });
  };

  const rowData = () => {
    let rows = schema;
    let keys = getKeys();

    // Creating a deep copy of the data
    const rowCopy = JSON.parse(JSON.stringify(rows))

    // Converting UNIX timestamp
    rowCopy.forEach(curObj => {
      curObj.created = new Date(curObj.created * 1000).toLocaleString();

      rowCopy.push(curObj.created)
    });

    return rowCopy.map((row, index) => {
      return (
        <tr key={index}>
          <RenderRow key={index} data={row} keys={keys}/>
        </tr>
      )
    })
  }

  return (
    <table>
    <thead>
      <tr>
      {getHeader()}
      </tr>
    </thead>
    <tbody>
    {rowData()}
    </tbody>
    </table>
  )
};

export default RenderForm;
