import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../components/material-input-fields/material.input.tsx';
import { useMutation, useQueryClient } from 'react-query';
import { addUsers } from '../../api/usersApi';
import { useNavigate } from 'react-router-dom';
import { addResolver } from './data';

const Add = ({ lastPage, setShowAddForm }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ addResolver });
  const queryClient = useQueryClient();
  const addUserMutation = useMutation(addUsers, {
    onSuccess: () => {
      queryClient.invalidateQueries('users');
    },
  });
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(`errors`, errors);
    addUserMutation.mutate(data);
    setShowAddForm(false);
    navigate(`/users/?pageNumber=${lastPage}`);
  };

  return (
    <div className="flex h-screen justify-center items-center bg-blue-200">
      <form
        className="flex flex-col bg-gray-50 p-8 border rounded-md gap-y-4 text-center text-xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          name="first_name"
          control={control}
          error={errors?.first_name ? true : false}
        />
        <Input
          name="last_name"
          control={control}
          error={errors?.last_name ? true : false}
        />
        <Input
          name="country"
          control={control}
          error={errors?.country ? true : false}
        />
        <Input
          name="salary"
          control={control}
          error={errors?.salary ? true : false}
        />
        <Input
          name="age"
          control={control}
          error={errors?.age ? true : false}
        />
        <button className="bg-red-500 rounded-md text-white px-2" type="submit">
          ADD user
        </button>
        <button
          className="bg-gray-500 rounded-md text-white px-2"
          onClick={() => setShowAddForm(false)}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default Add;
