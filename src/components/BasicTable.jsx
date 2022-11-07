import { useState, useEffect } from 'react';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper,
} from '@mui/material';
// import urlBuilder from '../utilities/utils';

// const rows = [];

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
            <TableCell align="right">Created On</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Files</TableCell>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Last Used</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Size</TableCell>
            <TableCell align="right">Tags</TableCell>
            <TableCell align="right">Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow key={row.id}>
              {/* <TableCell component="th" scope="row">{row.id}</TableCell> */}
              <TableCell align="right">{row.created}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.files}</TableCell>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.last_used}</TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.size}</TableCell>
              <TableCell align="right">{row.tags}</TableCell>
              <TableCell align="right">{row.type}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
