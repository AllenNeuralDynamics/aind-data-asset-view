import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import urlBuilder from '../utilities/utils';
import '../styles/RenderForm.css';

const convertTimestamp = (val) => {
  const timestamp = new Date(val * 1000);
  const day = timestamp.getDate();
  const month = timestamp.getMonth() + 1;
  const year = timestamp.getFullYear();
  const createdDate = `${year}-${month}-${day}`;
  return createdDate;
};

function RenderForm({ userInput }) {
  /**
  * Perform GET request
  * Render response from GET request
  * @return {React.ReactComponentElement} Table header and rows
  */
  const urlProxy = 'http://localhost:8080/data_assets';

  const [data, setData] = useState();

  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (userInput) {
      const url = urlBuilder(urlProxy, userInput);
      const getResponse = async () => {
        const response = await fetch(url).catch((error) => {
          if (!error.response) {
            setMessage('Network Error: Cannot connect to Code Ocean.');
          }
        });
        const responseData = await response.json();
        setData(responseData);
      };
      getResponse();
      setMessage(null);
    }
  }, [userInput]);

  if (message) {
    return <div>{message}</div>;
  }
  if (data) {
    const tableBody = data.results.map((info) => (
      <tr key={info.id}>
        <td>{info.type}</td>
        <td>{convertTimestamp(info.created)}</td>
        <td>{info.name}</td>
        <td>{info.id}</td>
        <td>{info.description}</td>
        <td>{info.files}</td>
        <td>{info.last_used}</td>
        <td>{info.size}</td>
        <td>{info.state}</td>
        <td>{`${JSON.stringify(info.tags)}`}</td>
        <td>{info.provenance ? `${JSON.stringify(info.provenance)}` : null}</td>
      </tr>
    ));
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Created</th>
              <th>Name</th>
              <th>ID</th>
              <th>Description</th>
              <th>Files</th>
              <th>Last Used</th>
              <th>Size</th>
              <th>State</th>
              <th>Tags</th>
              <th>Provenance</th>
            </tr>
          </thead>
          <tbody>{tableBody}</tbody>
        </table>
      </div>
    );
  }
}

RenderForm.propTypes = {
  userInput: PropTypes.shape({}),
};

RenderForm.defaultProps = {
  userInput: undefined,
};

export default RenderForm;
