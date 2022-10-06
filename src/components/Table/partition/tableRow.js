import React from 'react';
import TableData from './tableData';

const TableRow = ({ row }) => {
  return (
    <tr
      {...row.getRowProps()}
      className="py-2 border-b cursor-pointer hover:bg-red-100 "
    >
      {row.cells.map((cell) => {
        return <TableData cell={cell} />;
      })}
    </tr>
  );
};

export default TableRow;
