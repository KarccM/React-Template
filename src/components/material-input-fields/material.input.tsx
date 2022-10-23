import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import React from 'react';
import { MaterialInput as MaterialInputType } from '../../interfaces/input-types.interface';

const MaterialInput = ({ name, control,defaultValue, error, ...rest }:MaterialInputType) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <TextField
        sx={{ background: '#FFF' }}
        id="outlined-basic"
        error={error}
        label={name}
        variant="outlined"
        {...field}
        {...rest}
      />
    )}
  />
);

export default MaterialInput;
