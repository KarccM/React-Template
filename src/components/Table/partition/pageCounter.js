import React from 'react';

const PageCounter = ({ pageIndex, pageOptions }) => {
  return (
    <div className="flex gap-x-2">
      Page
      <stronge class="font-semibold">
        {1 + pageIndex} of {pageOptions.length}
      </stronge>
    </div>
  );
};

export default PageCounter;
