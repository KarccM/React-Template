import React from 'react';
import TableRow from './tableRow';
const Tbody = ({ getTableBodyProps, page, prepareRow }) => {
  return (
    <tbody {...getTableBodyProps()} className="text-center">
      {page.map((row) => {
        prepareRow(row);
        return <TableRow row={row} key={row.id} />;
      })}
    </tbody>
  );
};

export default Tbody;
