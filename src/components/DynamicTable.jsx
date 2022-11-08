import { useState, useEffect } from 'react';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper,
} from '@mui/material';
import { DateTime } from 'luxon';

const headers = [
  {
    id: 1,
    name: 'date',
  },
  {
    id: 2,
    name: 'description',
  },
  {
    id: 3,
    name: 'files',
  },
  {
    id: 4,
    name: 'id',
  },
  {
    id: 5,
    name: 'last used',
  },
  {
    id: 6,
    name: 'name',
  },
  {
    id: 7,
    name: 'size',
  },
  {
    id: 8,
    name: 'state',
  },
  {
    id: 9,
    name: 'tags',
  },
  {
    id: 10,
    name: 'type',
  },
  {
    id: 11,
    name: 'provenance',
  },
];

export default function DynamicTable() {
  const [tableData, setTableData] = useState([]);

  const convertTimestamp = (timeValue) => {
    const dateTimeISO = DateTime.fromSeconds(timeValue).toISO();
    return dateTimeISO;
  };

  useEffect(() => {
    const getResponse = async () => {
      const response = await fetch('http://localhost:8080/data_assets')
        .catch((error) => {
          console.log(error);
        });
      const data = await response.json();
      setTableData(data.results);
    };
    getResponse();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table stickyHeader aria-label="simple table">
        <TableHead>
          <TableRow>
            {headers.map((item) => (
              <TableCell key={item.id}>{item.name.toUpperCase()}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            // console.log(row)
            <TableRow key={row.id}>
              {Object.keys(row).map((key) => (
                // console.log(key, row[key])
                // if (key === "created") {
                //   <TableCell>{convertTimestamp(row[key])}</TableCell>
                // }
                <TableCell>{row[key]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
