import { useState, useEffect } from 'react';
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
    // valueFormatter: (params) => convertTimestamp(params.value),
  },
  {
    field: 'name',
    headerName: 'Name',
  },
  {
    field: 'size',
    headerName: 'Size',
  },
  {
    field: 'state',
    headerName: 'State',
  },
  {
    field: 'tags',
    headerName: 'Tags',
  },
  {
    field: 'type',
    headerName: 'Type',
  },
];

export default function DynamicTable() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/data_assets?type=dataset')
      .then((data) => data.json())
      .then((data) => setTableData(data.results));
  }, []);

  return (
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid 
        rows={tableData} 
        columns={columns} pageSize={10} 
      />
    </div>
  );
}
