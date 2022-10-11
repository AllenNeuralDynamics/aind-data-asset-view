import { useState, useEffect } from 'react';
import RenderRow from './RenderRow';

function RenderForm() {
  /**
   * Perform GET request
   * Render response from GET request
   * @return {React.ReactComponentElement} Table header and rows
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
      setSchema(data.results);
      console.log(schema);
      if (data.has_more) {
        getResponse();
      }
    }
    getResponse();
  }, []);
  const getKeys = () => {
    // Use keys of first object for table header but if null or undefined, set to empty object
    const keys = Object.keys(schema[0] ?? {});

    return keys;
  };

  const getHeader = () => {
    let counter = 0;
    const headers = getKeys();

    return headers.map((key) => {
      counter += 1;

      return (
        <th key={counter}>{key.toUpperCase()}</th>
      );
    });
  };

  const rowData = () => {
    const rows = schema;
    // console.log(rows);
    const keys = getKeys();
    let counter = 0;

    // Creating a deep copy of the data
    const rowCopy = JSON.parse(JSON.stringify(rows));

    // Converting UNIX timestamp
    rowCopy.forEach((curObj) => {
      curObj.created = new Date(curObj.created * 1000).toLocaleString();

      rowCopy.push(curObj.created);
    });

    return rowCopy.map((row) => {
      counter += 1;
      return (
        <tr key={counter}>
          <RenderRow key={counter} data={row} keys={keys} />
        </tr>
      );
    });
  };

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
  );
}

export default RenderForm;
