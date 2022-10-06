import React from 'react';

const PageCounter = ({ pageIndex, pageOptions }) => {
  return (
    <div className="flex gap-x-2">
      Page
      <stronge class="font-semibold">
        {pageIndex + 1} of {pageOptions.length}
      </stronge>
    </div>
  );
};

export default PageCounter;
