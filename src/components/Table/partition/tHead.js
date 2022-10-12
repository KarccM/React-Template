import React from 'react';

const Thead = ({ headerGroups, showFilters }) => {
  return (
    <thead className={`bg-blue-700 text-gray-50  `}>
      {headerGroups.map((headerGroup) => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column) => (
            <th {...column.getHeaderProps()}>
              {column.render('Header')}
              <div className="text-gray-900">
                {showFilters && (
                  <> {column?.canFilter ? column.render('Filter') : null}</>
                )}
              </div>
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};

export default Thead;
