import { useState } from 'react';
import { useAsyncDebounce } from 'react-table';

export const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column;
  const [value, setValue] = useState(filterValue);
  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 200);

  return (
    <span className="flex justify-center items-center">
      <input
        className="border border-gray-400 px-2 py-1 rounded-md my-2 text-center"
        value={value || ''}
        placeholder="Search"
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
    </span>
  );
};
