import React from 'react';

const TableData = ({ cell }) => {
  return (
    <td {...cell.getCellProps} className="w-48">
      {cell.render('Cell')}
    </td>
  );
};

export default TableData;
