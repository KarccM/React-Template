import { SliderColumnFilter } from '../../components/Table/filters/sliderColumnFilter';
import { NumberRangeColumnFilter } from '../../components/Table/filters/numberRangeColumnFilter';
import { SelectColumnFilter } from '../../components/Table/filters/selectColumnFilter';
import Delete from './delete';
import { NavLink } from 'react-router-dom';

export const columns = [
  {
    Header: 'id',
    accessor: 'id',
    disableFilters: true,
    Cell: ({ cell }) => {
      return (
        <NavLink className={'px-10'} to={`${cell.row.values.id}`}>
          {cell.value}
        </NavLink>
      );
    },
  },
  {
    Header: 'First Name',
    accessor: 'first_name',
    Cell: ({ cell }) => {
      return (
        <NavLink className={'px-10'} to={`${cell.row.values.id}`}>
          {cell.value}
        </NavLink>
      );
    },
  },
  {
    Header: 'Last Name',
    accessor: 'last_name',
    Cell: ({ cell }) => {
      return (
        <NavLink className={'px-10'} to={`${cell.row.values.id}`}>
          {cell.value}
        </NavLink>
      );
    },
  },
  {
    Header: 'Age',
    accessor: 'age',
    Filter: SliderColumnFilter,
    Cell: ({ cell }) => {
      return (
        <NavLink className={'px-10'} to={`${cell.row.values.id}`}>
          {cell.value}
        </NavLink>
      );
    },
  },
  {
    Header: 'Salary',
    accessor: 'salary',
    Filter: NumberRangeColumnFilter,
    Cell: ({ cell }) => {
      return (
        <NavLink className={'px-10'} to={`${cell.row.values.id}`}>
          {cell.value}
        </NavLink>
      );
    },
  },
  {
    Header: 'Country',
    accessor: 'country',
    Filter: SelectColumnFilter,
    Cell: ({ cell }) => {
      return (
        <NavLink className={'px-10'} to={`${cell.row.values.id}`}>
          {cell.value}
        </NavLink>
      );
    },
  },
  {
    Header: 'Action',
    Cell: ({ row }) => {
      return <Delete id={row.cells[0].value} />;
    },
  },
];
