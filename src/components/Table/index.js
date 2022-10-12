import React, { useMemo } from 'react';
import Table from './table';
import { ColumnFilter } from './filters/columnFilter';

const App = ({ columns, data }) => {
  const COLUMNS = useMemo(() => columns, [columns]);
  const Data = useMemo(() => data, [data]);
  const defaultColumn = useMemo(() => ({ Filter: ColumnFilter }), []);
  return <Table columns={COLUMNS} data={Data} defaultColumn={defaultColumn} />;
};

export default App;
