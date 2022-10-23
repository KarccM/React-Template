import { selectFiled } from '../../../styles/buttons';

// This is a custom UI for our 'between' or number range
// filter. It uses two number boxes and filters rows to
// ones that have values between the two
export const NumberRangeColumnFilter = ({
  column: { filterValue = [], preFilteredRows, setFilter, id },
}) => {
  return (
    <div className="flex justify-center items-center gap-x-1">
      <input
        className={selectFiled + ' w-28'}
        value={filterValue[0] || ''}
        type="number"
        onChange={(e) => {
          e.preventDefault();
          const val = e.target.value;
          setFilter((old = []) => [val ? parseInt(val, 10) : 0, old[1]]);
        }}
      />
      to
      <input
        className={' w-28'}
        value={selectFiled + filterValue[1] || ''}
        type="number"
        onChange={(e) => {
          e.preventDefault();
          const val = e.target.value;
          setFilter((old = []) => [old[0], val ? parseInt(val, 10) : 0]);
        }}
      />
    </div>
  );
};
