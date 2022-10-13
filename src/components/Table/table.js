import {
  useTable,
  useFilters,
  useGlobalFilter,
  usePagination,
} from 'react-table';
import GlobalFilter from './filters/globalFilter';
import React, { useState } from 'react';
import PageNav from './partition/pageNav';
import PageCounter from './partition/pageCounter';
import Thead from './partition/tHead';
import Tbody from './partition/tBody';
import { NavLink, useSearchParams } from 'react-router-dom';

const Table = ({ columns, data, defaultColumn }) => {
  const [showFilters, setShowFilters] = useState(false);
  const [pageNumber, setPageNumber] = useSearchParams({ pageNumber: 0 });
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
        pageIndex: pageNumber ? parseInt(pageNumber.get('pageNumber')) : 0,
        pageSize: 20,
      },
    },
    useFilters,
    useGlobalFilter,
    usePagination
  );

  React.useEffect(() => {
    setPageNumber({ pageNumber: pageIndex });
  }, [state]);

  const { globalFilter, pageIndex } = state;
  return (
    <div class="w-5/6 mx-auto">
      <div className="flex justify-between items-center gap-x-2 mt-2 mb-8">
        <GlobalFilter filter={globalFilter} setGlobalFilter={setGlobalFilter} />
        <div className="flex flex-col gap-y-1">
          <NavLink
            className={'bg-red-500 text-white rounded-md px-2 py-1'}
            to={'add'}
          >
            ADD user
          </NavLink>
          <button
            className={'bg-blue-600 text-white rounded-md px-2 py-1'}
            onClick={() => {
              setShowFilters(!showFilters);
            }}
          >
            show Filters
          </button>
        </div>
      </div>
      <table {...getTableProps()} className="w-full  bg-gray-50 ">
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
        <PageCounter
          // pageIndex={parseInt(pageIndex)}
          pageIndex={pageIndex}
          pageOptions={pageOptions}
        />
      </tfooter>
    </div>
  );
};

export default Table;
