import { useMemo } from 'react';
import { useAsyncDebounce } from 'react-table';

export const SliderColumnFilter = ({
  column: { filterValue, setFilter, preFilteredRows, id },
}) => {
  const [min, max] = useMemo(() => {
    let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    preFilteredRows.forEach((row) => {
      min = Math.min(row.values[id], min);
      max = Math.max(row.values[id], max);
    });
    return [min, max];
  }, [id, preFilteredRows]);

  const onChange = useAsyncDebounce((value) => {
    setFilter(value);
  }, 1);

  return (
    <div className="flex gap-x-1 justify-center">
      <input
        type="range"
        min={min}
        max={max}
        value={filterValue || min}
        onChange={(e) => {
          onChange(parseInt(e.target.value, 10));
        }}
      />
      <button
        className="bg-gray-100 border rounded-md px-1"
        onClick={() => setFilter(undefined)}
      >
        {filterValue ? filterValue : 'reset'}
      </button>
    </div>
  );
};
