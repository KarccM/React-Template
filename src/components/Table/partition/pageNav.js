import React from 'react';

const PageNav = ({ previousPage, canPreviousPage, nextPage, canNextPage }) => {
  return (
    <div className="flex gap-x-2">
      <button
        onClick={() => {
          previousPage();
        }}
        disabled={!canPreviousPage}
      >
        Previous
      </button>
      <button
        onClick={() => {
          nextPage();
        }}
        disabled={!canNextPage}
      >
        Next
      </button>
    </div>
  );
};

export default PageNav;
