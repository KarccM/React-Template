import React from 'react';
import { useForm } from 'react-hook-form';
import { resolver } from '../../Containers/users/add';
import Input from '../../components/material-input-fields/material.input.tsx';
import { useMutation, useQueryClient } from 'react-query';
import { addUsers } from '../../api/usersApi';
import { Navigate } from 'react-router-dom';
import { useAuthState } from '../../context/Auth';
import Error401 from '../../components/error403';
const Add = () => {
  const { control, handleSubmit, errors } = useForm(resolver);
  const queryClient = useQueryClient();
  const addUserMutation = useMutation(addUsers, {
    onSuccess: () => {
      queryClient.invalidateQueries('users');
    },
  });

  const onSubmit = (data) => {
    console.log(`data`, data);
    addUserMutation.mutate(data);
    Navigate('/users');
  };

  const { isAuthenticated } = useAuthState;

  return (
    <>
      {isAuthenticated ? (
        <div className="flex h-screen justify-center items-center bg-blue-200">
          <form
            className="flex flex-col bg-gray-50 p-8 border rounded-md gap-y-4 text-center text-xl"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              name={'first_name'}
              control={control}
              error={errors?.first_name ? true : false}
            />
            <Input
              name={'last_name'}
              control={control}
              error={errors?.last_name ? true : false}
            />
            <Input
              name={'country'}
              control={control}
              error={errors?.country ? true : false}
            />
            <Input
              name={'salary'}
              control={control}
              error={errors?.salary ? true : false}
            />
            <Input
              error={errors?.age ? true : false}
              name={'age'}
              control={control}
            />
            <button
              className="bg-red-500 rounded-md text-white px-2"
              type="submit"
            >
              ADD user
            </button>
          </form>
        </div>
      ) : (
        <Error401 />
      )}
    </>
  );
};

export default Add;
