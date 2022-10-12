import React from 'react';
import TableData from './tableData';

const TableRow = ({ row }) => {
  return (
    <tr
      {...row.getRowProps()}
      className="border-b cursor-pointer hover:bg-blue-200  "
      to={'/'}
    >
      {row.cells.map((cell) => {
        return <TableData cell={cell} />;
      })}
    </tr>
  );
};

export default TableRow;
