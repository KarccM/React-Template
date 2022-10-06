import { useState } from 'react';
import { useAsyncDebounce } from 'react-table';
const GlobalFilter = ({ globalFilter, setGlobalFilter }) => {
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <span className="flex w-1/3 items-center">
      <input
        className="border border-gray-400 px-2 py-1 rounded-md my-2  w-full"
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

export default GlobalFilter;
