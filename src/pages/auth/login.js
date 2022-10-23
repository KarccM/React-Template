import React from 'react';
import { useForm } from 'react-hook-form';
import CircularProgress from '@mui/material/CircularProgress';
import { useMutation, useQueryClient } from 'react-query';
import { loginResolver } from './data';
import { useAuthState } from '../../context/Auth';
import { login as axiosLogin } from '../../api/authapi';
import Input from '../../components/material-input-fields/material.input.tsx';

const Login = () => {
  const queryClient = useQueryClient();
  const { login } = useAuthState();
  let loginData;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: loginResolver });

  const loginMutaion = useMutation(axiosLogin, {
    onSuccess: (data) => {
      queryClient.invalidateQueries('auth');
      login(loginData, data);
    },
  });
  let { data: token, error, isError, isLoading } = loginMutaion;
  const onSubmit = async (data) => {
    loginData = data;
    loginMutaion.mutate(loginData);
  };

  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen relative ">
      {isLoading && (
        <div className="absolute z-10 bg-gray-900 h-screen flex justify-center w-full opacity-75 items-center py-6 px-12 border rounded-md">
          <CircularProgress />
        </div>
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col mx-auto p-4 border bg-white rounded-md gap-y-6 w-1/4 "
      >
        <h1 className="text-center text-4xl text-gray-500">Login</h1>
        {isError && (
          <h1 className="text-red-600 text-center bg-red-100 border border-red-600 py-1 rounded-sm  text-xl">
            {error?.message}
          </h1>
        )}
        <Input
          name={'username'}
          control={control}
          error={errors.username ? true : false}
        />
        <Input
          name={'password'}
          control={control}
          error={errors.password ? true : false}
          type={'password'}
        />
        <button
          className={`bg-blue-600 text-white font-semibold w-1/2 mx-auto py-1`}
          type="submin"
          disabled={isLoading}
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
