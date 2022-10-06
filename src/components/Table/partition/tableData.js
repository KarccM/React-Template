import React from 'react';

const TableData = ({ cell }) => {
  return <td {...cell.getCellProps}>{cell.render('Cell')}</td>;
};

export default TableData;
