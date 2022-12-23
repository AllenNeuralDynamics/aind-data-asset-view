import PropTypes from 'prop-types';
import { DataGrid } from '@mui/x-data-grid';
import { DateTime } from 'luxon';
import { filesize } from 'filesize';

const convertTimestamp = (timeValue) => {
  const formattedDatetime = DateTime.fromSeconds(timeValue).toLocaleString(
    DateTime.DATETIME_MED
  );
  return formattedDatetime;
};

const columns = [
  {
    field: 'created',
    headerName: 'Date Created',
    valueFormatter: (params) => convertTimestamp(params?.value),
    minWidth: 200,
  },
  {
    field: 'name',
    headerName: 'Filename',
    minWidth: 400,
  },
  {
    field: 'id',
    headerName: 'ID',
    minWidth: 325,
  },
  {
    field: 'tags',
    headerName: 'Tags',
    minWidth: 200,
  },
  {
    field: 'last_used',
    headerName: 'Last Used',
    valueFormatter: (params) => {
      if (params.value > 0) {
        return convertTimestamp(params.value);
      }
      return '';
    },
    minWidth: 200,
  },
  {
    field: 'size',
    headerName: 'File Size',
    valueFormatter: (params) => filesize(params.value),
    minWidth: 150,
  },
  {
    field: 'state',
    headerName: 'State',
  },
  {
    field: 'type',
    headerName: 'Type',
  },
  {
    field: 'files',
    headerName: 'Files',
  },
  {
    field: 'description',
    headerName: 'Description',
  },
  {
    field: 'capsule',
    headerName: 'Capsule',
    minWidth: 300,
    valueGetter: (params) => {
      if (params.row.provenance) {
        return params.row.provenance.capsule;
      }
      return '';
    },
  },
  {
    field: 'commit',
    headerName: 'Commit',
    minWidth: 300,
    valueGetter: (params) => {
      if (params.row.provenance) {
        return params.row.provenance.commit;
      }
      return '';
    },
  },
  {
    field: 'data_assets',
    headerName: 'Data Assets',
    minWidth: 300,
    valueGetter: (params) => {
      if (params.row.provenance) {
        return params.row.provenance.data_assets;
      }
      return '';
    },
  },
  {
    field: 'docker_image',
    headerName: 'Docker Image',
    minWidth: 300,
    valueGetter: (params) => {
      if (params.row.provenance) {
        return params.row.provenance.docker_image;
      }
      return '';
    },
  },
  {
    field: 'run_script',
    headerName: 'run Script',
    minWidth: 300,
    valueGetter: (params) => {
      if (params.row.provenance) {
        return params.row.provenance.run_script;
      }
      return '';
    },
  },
];

function DataTable({ rows }) {
  return (
    <div style={{ height: 450, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </div>
  );
}

DataTable.propTypes = {
  rows: PropTypes.shape({}),
};

DataTable.defaultProps = {
  rows: undefined,
};

export default DataTable;
