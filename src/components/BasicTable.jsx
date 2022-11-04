import { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import urlBuilder from '../utilities/utils';

function createData(number, item, qty, price) {
  return { number, item, qty, price };
}

const rows = [];

export default function DynamicTable() {

  const [data, setData] = useState();
  
  const urlProxy = 'http://localhost:8080/data_assets';
  
  const handleErrors = (response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response;
  };
  
  useEffect(() => {
    fetch(urlProxy)
      .catch((error) => {
      handleErrors(error);
      });
      const data = await response.json();
      setData(data.results);
    }
  }, [];

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>S.No</TableCell>
            <TableCell align="right">Item</TableCell>
            <TableCell align="right">Quantity&nhsp;(kg)</TableCell>
            <TableCell align="right">Price&nbsp;($)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow>
              <TableCell component="th" scope="row">{row.number}</TableCell>
              <TableCell align="right">{row.item}</TableCell>
              <TableCell align="right">{row.qty}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
