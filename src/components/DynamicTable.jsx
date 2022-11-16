import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
// import { DateTime } from 'luxon';

const columns = [
  {
    field: 'col1',
    headerName: 'date',
  },
  {
    field: 'col2',
    headerName: 'description',
  },
  {
    field: 'col3',
    headerName: 'files',
  },
  {
    field: 'col4',
    headerName: 'id',
  },
  {
    field: 'col5',
    headerName: 'last used',
  },
  {
    field: 'col6',
    headerName: 'name',
  },
  {
    field: 'col7',
    headerName: 'size',
  },
  {
    field: 'col8',
    headerName: 'state',
  },
  {
    field: 'col9',
    headerName: 'tags',
  },
  {
    field: 'col10',
    headerName: 'type',
  },
];

export default function DynamicTable() {
  const [tableData, setTableData] = useState([]);

  // const convertTimestamp = (timeValue) => {
  //   const formattedDatetime = DateTime.fromSeconds(timeValue).toLocaleString(DateTime.DATETIME_MED);
  //   return formattedDatetime;
  // };

  useEffect(() => {
    const getResponse = async () => {
      const response = await fetch('http://localhost:8080/data_assets?type=dataset')
        .catch((error) => {
          console.log(error);
        });
      const data = await response.json();
      setTableData(data.results);
    };
    getResponse();
  }, []);

  

  return (
    <div>
      {/* <DataGrid
        rows={tableData}
        columns={headers}
      /> */}
    </div>
    // <TableContainer component={Paper}>
    //   <Table stickyHeader aria-label="simple table">
    //     <TableHead>
    //       <TableRow>
    //         {headers.map((item) => (
    //           <TableCell key={item.id}>{item.name.toUpperCase()}</TableCell>
    //         ))}
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {tableData.map((row) => (
    //         <TableRow key={row.id}>
    //           {Object.keys(row).map((key) => {
    //             if (key === 'created') {
    //               return <TableCell>{convertTimestamp(row[key])}</TableCell>;
    //             }
    //             return <TableCell>{row[key]}</TableCell>;
    //           })}
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </TableContainer>
  );
}
