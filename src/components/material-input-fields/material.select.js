import { Controller } from 'react-hook-form';
import { MenuItem } from '@mui/material';
import React from 'react';
import { generateOptions } from '../../factories/options.api.factories';
import { useQuery } from 'react-query';
import Select from '@mui/material/Select';

const MaterialSelect = ({ name, control, ...rest }) => {
  const [options, setOptions] = React.useState([]);
  const requestFunction = generateOptions(name);
  const { data, refetch } = useQuery(`${name}`, requestFunction, {
    enabled: false,
  });

  React.useEffect(() => {
    setOptions(data?.data);
  }, [data]);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <Select
            sx={{ background: '#FFF' }}
            id="outlined-select-currency"
            label={name}
            onChange={field?.onChange}
            select
            onFocus={refetch}
            {...rest}
          >
            {options?.map(({ id, label }) => (
              <MenuItem key={id} value={id}>
                {label}
              </MenuItem>
            ))}
          </Select>
        );
      }}
    />
  );
};

export default MaterialSelect;
