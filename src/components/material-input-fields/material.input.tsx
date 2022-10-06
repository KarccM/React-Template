import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import React from 'react';
import { MaterialInput } from '../../interfaces/input-types.interface';

const Input = ({ name, control, value, ...rest }:MaterialInput) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <TextField
        sx={{ background: '#FFF' }}
        // value={value}
        id="outlined-basic"
        label={name}
        variant="outlined"
        {...field}
        {...rest}
      />
    )}
  />
);

export default Input;
