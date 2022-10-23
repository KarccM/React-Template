import React from 'react';
import { registerResolver } from './data';
import { useForm } from 'react-hook-form';
import Input from '../../components/material-input-fields/material.input.tsx';
import Select from '../../components/material-input-fields/material.select';

const Register = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ registerResolver });

  const onSubmit = (data) => {
    console.log('data: ', data);
  };

  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col mx-auto p-4 border bg-white gap-y-6 w-1/4 "
      >
        <h1 className="text-center text-4xl text-gray-500">Register</h1>
        <Input
          name={'email'}
          control={control}
          error={errors.email ? true : false}
        />
        <Input
          name={'password'}
          control={control}
          error={errors.password ? true : false}
          type={'password'}
        />
        <Select name={'wfp'} control={control} />
        <Select name={'icrc'} control={control} />
        <button
          className="bg-blue-600 text-white font-semibold w-1/2 mx-auto py-1 "
          type="submin"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;
