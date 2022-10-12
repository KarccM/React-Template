import React from 'react';

const PageNav = ({ previousPage, canPreviousPage, nextPage, canNextPage }) => {
  const btnStyle =
    'bg-blue-700 text-gray-50 py-2 rounded-md w-20 hover:bg-blue-500 transition duration-300 cursor-pointer';
  const btns = [
    {
      label: 'Previous',
      disabled: canPreviousPage,
      onClick: previousPage,
      style: btnStyle,
    },
    {
      label: 'Next',
      disabled: canNextPage,
      onClick: nextPage,
      style: btnStyle,
    },
  ];

  return (
    <div className="flex gap-x-2">
      {btns.map(({ label, onClick, disabled, style }) => {
        return (
          <button onClick={onClick} disabled={!disabled} className={style}>
            {label}
          </button>
        );
      })}
    </div>
  );
};
export default PageNav;
