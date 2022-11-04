import { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import urlBuilder from '../utilities/utils';
import Table from './Table';
import '../styles/RenderForm.css';
import Badges from '../utilities/Badge';

const convertTimestamp = (val) => {
  const timestamp = new Date(val * 1000);
  const day = timestamp.getDate();
  const month = timestamp.getMonth() + 1;
  const year = timestamp.getFullYear();
  const createdDate = `${month}/${day}/${year}`;
  return createdDate;
};

function RenderForm({ userInput }) {
  /**
   * Perform GET request
   * Render response from GET request
   * @return {React.ReactComponentElement} Table header and rows
   */

  const [loadingData, setLoadingData] = useState(true);

  const urlProxy = 'http://localhost:8080/data_assets';

  const columns = useMemo(
    () => [
      {
        Header: 'Created On',
        accessor: 'created',
        Cell: ({ cell: { value } }) => <div>{convertTimestamp(value)}</div>,
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'Size',
        accessor: 'size',
      },
      {
        Header: 'Tags',
        accessor: 'tags',
        Cell: ({ cell: { value } }) => <Badges values={value} />,
      },
      {
        Header: 'Files',
        accessor: 'files',
      },
      {
        Header: 'Type',
        accessor: 'type',
      },
      {
        Header: 'Last Used',
        accessor: 'last_used',
      },
      {
        Header: 'Provenance',
        columns: [
          {
            Header: 'Capsule',
            accessor: 'capsule',
          },
          {
            Header: 'Commit',
            accessor: 'commit',
          },
          {
            Header: 'Data Assets',
            accessor: 'data_assets',
          },
          {
            Header: 'Docker Image',
            accessor: 'docker_image',
          },
          {
            Header: 'Run Script',
            accessor: 'run_script',
          },
        ],
      },
    ],
    [],
  );

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
  }, [userInput, loadingData]);

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
  cell: PropTypes.shape({
    value: PropTypes.string,
  }),
};

RenderForm.defaultProps = {
  userInput: undefined,
  cell: undefined,
};

export default RenderForm;
