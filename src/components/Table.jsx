import { useTable } from 'react-table';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import '../styles/Table.css';

function Table({ columns, data }) {
  const tableInstance = useTable({ columns, data });

  const {
    getTableProps, getTableBodyProps, headerGroups, rows, prepareRow,
  } =
    tableInstance;

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr key={uuidv4()} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th key={uuidv4()} {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr key={uuidv4()} {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td key={uuidv4()} {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  columns: PropTypes.instanceOf(Array),
  data: PropTypes.instanceOf(Array),
};

Table.defaultProps = {
  columns: undefined,
  data: undefined,
};

export default Table;
