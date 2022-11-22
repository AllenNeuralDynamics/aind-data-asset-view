import PropTypes from 'prop-types';
import { DataGrid } from '@mui/x-data-grid';
import { DateTime } from 'luxon';

const convertTimestamp = (timeValue) => {
  const formattedDatetime = DateTime.fromSeconds(timeValue).toLocaleString(
    DateTime.DATETIME_MED,
  );
  return formattedDatetime;
};

const columns = [
  {
    field: 'created',
    headerName: 'Date',
    valueFormatter: (params) => convertTimestamp(params?.value),
    minWidth: 200,
  },
  {
    field: 'description',
    headerName: 'Description',
  },
  {
    field: 'files',
    headerName: 'Files',
  },
  {
    field: 'id',
    headerName: 'ID',
    minWidth: 325,
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
    field: 'name',
    headerName: 'Name',
    minWidth: 400,
  },
  {
    field: 'size',
    headerName: 'Size',
    minWidth: 150,
  },
  {
    field: 'state',
    headerName: 'State',
  },
  {
    field: 'tags',
    headerName: 'Tags',
    minWidth: 200,
  },
  {
    field: 'type',
    headerName: 'Type',
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
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={20} />
    </div>
  );
}

DataTable.propTypes = {
  rows: PropTypes.shape([]),
};

DataTable.defaultProps = {
  rows: undefined,
};

export default DataTable;
