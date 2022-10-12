import React from 'react';
import { buttonText, resolver, title } from '../Containers/login';
import { useAuthState } from '../context/Auth';
import { useForm } from 'react-hook-form';
import Input from '../components/material-input-fields/material.input.tsx';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const { isAuthenticated } = useAuthState();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver });

  const onSubmit = (data) => {
    console.log(`data`, data);
  };

  return (
    <>
      {isAuthenticated && <Navigate to="/" />}
      {!isAuthenticated && (
        <>
          <div className="bg-gray-100 flex justify-center items-center h-screen ">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col mx-auto p-4 border bg-white gap-y-6 w-1/4 "
            >
              <h1 className="text-center text-4xl text-gray-500">{title}</h1>
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
              >
                {buttonText}
              </button>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default Login;
