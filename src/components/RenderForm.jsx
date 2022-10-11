import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import RenderRow from './RenderRow';

function RenderForm({ userInput }) {
  /**
   * Perform GET request
   * Render response from GET request
   * @return {React.ReactComponentElement} Table header and rows
   */

  const [schema, setSchema] = useState([]);
  const URL = 'http://localhost:8080/data_assets?type=dataset';

  const getResponse = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setSchema(data.results);
  };

  useEffect(() => {
    getResponse();
  }, [userInput]);

  const getKeys = () => {
    // Use keys of first object for table header but if null or undefined, set to empty object
    return Object.keys(schema[0] ?? {});
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
    const keys = getKeys();
    let rowCount = 0;

    // Creating a deep copy of the data
    const rowCopy = JSON.parse(JSON.stringify(rows));

    // Converting UNIX timestamp
    rowCopy.forEach((curObj) => {
      curObj.created = new Date(curObj.created * 1000).toLocaleString();

      rowCount += 1;
      rowCopy.push(curObj.created);
    });

    return rowCopy.map((row, rowCount) => {
      return (
        <tr key={rowCount}>
          <RenderRow key={rowCount} data={row} keys={keys} />
        </tr>
      );
    });
  };

  if (userInput) {
    // return (
    //   <pre id="json">{JSON.stringify(schema, null, 4)}</pre>
    // );
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
  return (
    <p />
  );
}

RenderForm.propTypes = {
  userInput: PropTypes.string.isRequired,
};

export default RenderForm;
