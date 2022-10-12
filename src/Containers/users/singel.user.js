import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const schema = yup
  .object({
    first_name: yup.string().required(),
    last_name: yup.string().required(),
    country: yup.string().required(),
    age: yup.number().integer().positive().required(),
    salary: yup.number().integer().positive().required(),
  })
  .required();

export const resolver = yupResolver(schema);
