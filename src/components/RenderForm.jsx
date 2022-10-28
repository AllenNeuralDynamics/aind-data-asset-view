import { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import urlBuilder from '../utilities/utils';
import Table from './Table';

function RenderForm({ userInput }) {
  /**
   * Perform GET request
   * Render response from GET request
   * @return {React.ReactComponentElement} Table header and rows
   */

  const [loadingData, setLoadingData] = useState(true);

  const urlProxy = 'http://localhost:8080/data_assets';

  const columns = useMemo(() => [
    {
      Header: 'Created',
      accessor: 'created',
    },
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Description',
      accessor: 'description',
    },
    {
      Header: 'Files',
      accessor: 'files',
    },
    {
      Header: 'ID',
      accessor: 'id',
    },
    {
      Header: 'Last Used',
      accessor: 'last_used',
    },
    {
      Header: 'Size',
      accessor: 'size',
    },
    {
      Header: 'Tags',
      accessor: 'tags',
      Cell: ({ cell: { value } }) => value || '-',
    },
    {
      Header: 'Type',
      accessor: 'type',
      Cell: ({ cell: { value } }) => value,
    },
  ]);

  const handleErrors = (response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response;
  };

  const [data, setData] = useState();

  useEffect(() => {
    if (userInput) {
      const url = urlBuilder(urlProxy, userInput);
      const getResponse = async () => {
        const response = await fetch(url).catch((error) => {
          handleErrors(error);
        });
        const responseData = await response.json();
        setData(responseData.results);
        setLoadingData(false);
      };
      if (loadingData) {
        getResponse();
      }
    }
  }, [userInput]);

  if (data) {
    return (
      <div>
        {loadingData ? <p>...</p> : <Table columns={columns} data={data} />}
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
