import { useTable } from 'react-table';
import PropTypes from 'prop-types';

function Table({ columns, data }) {
  // Table component logic and UI go here
  const {
    getTableProps, getTableBodyProps, headerGroups, rows, prepareRow,
  } =
    useTable({
      columns,
      data,
    });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);

          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => <td {...cell.getCellProps()}>{cell.render('Cell')}</td>)}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  columns: PropTypes.isRequired,
  data: PropTypes.isRequired,
};

export default Table;
