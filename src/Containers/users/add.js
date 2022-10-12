import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const schema = yup
  .object({
    first_name: yup.string().required(),
    last_name: yup.string().required(),
    age: yup.number().positive().required(),
    salary: yup.number().positive().required(),
    country: yup.string().required(),
  })
  .required();

export const resolver = yupResolver(schema);
