import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const schema = yup
  .object({
    username: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

export const resolver = yupResolver(schema);

export const title = 'Login';
export const buttonText = 'Sign in';

export const inputs = [
  {
    filedType: 'input',
    name: 'username',
    type: 'text',
  },
  {
    filedType: 'input',
    name: 'password',
    type: 'password',
  },
];
