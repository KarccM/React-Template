import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import { MaterialSelect } from '../../interfaces/input-types.interface';

const Select = ({ name, control, options, ...rest }:MaterialSelect) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => {
      return (
        <>
          <TextField
            sx={{ background: '#FFF' }}
            id="outlined-select-currency"
            label={name}
            onChange={field?.onChange}
            select
            {...rest}
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </>
      );
    }}
  />
);

export default Select;
