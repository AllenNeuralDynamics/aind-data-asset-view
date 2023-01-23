import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import urlBuilder from '../utilities/utils';
import DataTable from './DataTable/DataTable';
import CO_PROXY from '../constants/config';

function RenderForm({ typeDropdown, querySelect }) {
  /**
   * Perform GET request
   * Render response from GET request
   * @return {React.ReactComponentElement} Table header and rows
   */

  const [tableData, setTableData] = useState();
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (typeDropdown || querySelect) {
      const url = urlBuilder(CO_PROXY, typeDropdown, querySelect);
      const getResponse = async () => {
        const response = await fetch(url).catch((error) => {
          if (!error.response) {
            setMessage('Network Error: Cannot connect to Code Ocean.');
          }
        });
        const responseData = await response.json();
        setTableData(responseData.results);
      };
      getResponse();
      setMessage(null);
    }
  }, [typeDropdown, querySelect]);

  if (message) {
    return <div>{message}</div>;
  }
  if (tableData) {
    return (
      <div>
        <DataTable rows={tableData} />
      </div>
    );
  }
}

RenderForm.propTypes = {
  typeDropdown: PropTypes.shape({}),
  querySelect: PropTypes.shape({}),
};

RenderForm.defaultProps = {
  typeDropdown: undefined,
  querySelect: undefined,
};

export default RenderForm;
