import { SliderColumnFilter } from '../../components/Table/filters/sliderColumnFilter';
import { NumberRangeColumnFilter } from '../../components/Table/filters/numberRangeColumnFilter';
import { SelectColumnFilter } from '../../components/Table/filters/selectColumnFilter';
export const columns = [
  {
    Header: 'id',
    accessor: 'id',
    disableFilters: true,
  },
  {
    Header: 'First Name',
    accessor: 'first_name',
  },
  {
    Header: 'Last Name',
    accessor: 'last_name',
  },
  {
    Header: 'Age',
    accessor: 'age',
    Filter: SliderColumnFilter,
  },
  {
    Header: 'Salary',
    accessor: 'salary',
    Filter: NumberRangeColumnFilter,
  },
  {
    Header: 'Country',
    accessor: 'country',
    Filter: SelectColumnFilter,
  },
  // {
  //   Header: 'Action',
  //   Cell: ({ row }) => {
  //     console.log(row);
  //     return <>A</>;
  //   },
  // },
];
