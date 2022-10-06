import {
  useTable,
  useFilters,
  useGlobalFilter,
  usePagination,
} from 'react-table';
import GlobalFilter from './filters/globalFilter';
import { useState } from 'react';
import PageNav from './partition/pageNav';
import PageCounter from './partition/pageCounter';
import Thead from './partition/tHead';
import Tbody from './partition/tBody';

const Table = ({ columns, data, defaultColumn }) => {
  const [showFilters, setShowFilters] = useState(false);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      initialState: {
        pageSize: 20,
      },
    },
    useFilters,
    useGlobalFilter,
    usePagination
  );
  const { globalFilter, pageIndex } = state;
  return (
    <div class="w-4/5 mx-auto">
      <div className="flex justify-start items-center gap-x-2 mt-2 mb-8">
        <GlobalFilter filter={globalFilter} setGlobalFilter={setGlobalFilter} />
        <button
          onClick={() => {
            setShowFilters(!showFilters);
          }}
        >
          Filters
        </button>
      </div>
      <table {...getTableProps()} className="w-full  bg-gray-100 ">
        <Thead headerGroups={headerGroups} showFilters={showFilters} />
        <Tbody
          page={page}
          prepareRow={prepareRow}
          getTableBodyProps={getTableBodyProps}
        />
      </table>
      <tfooter className="mt-2 flex flex-col items-center gap-y-2">
        <PageNav
          previousPage={previousPage}
          canPreviousPage={canPreviousPage}
          nextPage={nextPage}
          canNextPage={canNextPage}
        />
        <PageCounter pageIndex={pageIndex} pageOptions={pageOptions} />
      </tfooter>
    </div>
  );
};

export default Table;
