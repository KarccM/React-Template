import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const loginSchema = yup
  .object({
    username: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

export const loginResolver = yupResolver(loginSchema);

export const registerSchema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
    wfp: yup.string().required(),
    icrc: yup.string().required(),
  })
  .required();

export const registerResolver = yupResolver(registerSchema);
