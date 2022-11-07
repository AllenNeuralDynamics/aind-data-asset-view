import { useState, useEffect } from 'react';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper,
} from '@mui/material';
// import urlBuilder from '../utilities/utils';

const headers = [
  {
    id: 1,
    name: 'created',
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
    name: 'last_used',
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
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {headers.map((item) => (
              <TableCell key={item.id}>{item.name}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow key={row.id}>
              {Object.keys(row).map((key) => (
                <TableCell>{row[key]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
