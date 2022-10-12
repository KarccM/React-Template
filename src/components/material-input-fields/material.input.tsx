import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import React from 'react';
import { MaterialInput } from '../../interfaces/input-types.interface';

const Input = ({ name, control,defaultValue, error, ...rest }:MaterialInput) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <TextField
        sx={{ background: '#FFF' }}
        id="outlined-basic"
        error={error}
        label={`${name} ${defaultValue? `: ${defaultValue}`:''}`}
        variant="outlined"
        {...field}
        {...rest}
      />
    )}
  />
);

export default Input;
