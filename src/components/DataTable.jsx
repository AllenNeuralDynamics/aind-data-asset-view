// import { DataGrid } from '@mui/x-data-grid';
// import { DateTime } from 'luxon';
// import PropTypes from 'prop-types';

// const convertTimestamp = (timeValue) => {
//   const formattedDatetime = DateTime.fromSeconds(timeValue).toLocaleString(
//     DateTime.DATETIME_MED,
//   );
//   return formattedDatetime;
// };

// const columns = [
//   {
//     field: 'created',
//     headerName: 'Date',
//     valueFormatter: (params) => convertTimestamp(params?.value),
//     minWidth: 200,
//   },
//   {
//     field: 'description',
//     headerName: 'Description',
//   },
//   {
//     field: 'files',
//     headerName: 'Files',
//   },
//   {
//     field: 'id',
//     headerName: 'ID',
//     minWidth: 325,
//   },
//   {
//     field: 'last_used',
//     headerName: 'Last Used',
//     valueFormatter: (params) => {
//       if (params.value > 0) {
//         return convertTimestamp(params.value);
//       }
//       return '';
//     },
//     minWidth: 200,
//   },
//   {
//     field: 'name',
//     headerName: 'Name',
//     minWidth: 400,
//   },
//   {
//     field: 'size',
//     headerName: 'Size',
//     minWidth: 150,
//   },
//   {
//     field: 'state',
//     headerName: 'State',
//   },
//   {
//     field: 'tags',
//     headerName: 'Tags',
//     minWidth: 200,
//   },
//   {
//     field: 'type',
//     headerName: 'Type',
//   },
//   {
//     field: 'provenance',
//     headerName: 'Provenance',
//   },
// ];

// function DataTable({ rows, loading }) {
//   return (
//     <div style={{ height: 700, width: '100%' }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         pageSize={10}
//         rowsPerPageOptions={[10]}
//         loading={loading}
//       />
//     </div>
//   );
// }

// DataTable.propTypes = {
//   rows: PropTypes.instanceOf(Array),
//   loading: PropTypes.bool,
// };

// DataTable.defaultProps = {
//   rows: undefined,
//   loading: undefined,
// };

// export default DataTable;
