import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
    wfp: yup.string().required(),
    icrc: yup.string().required(),
  })
  .required();

export const resolver = yupResolver(schema);
