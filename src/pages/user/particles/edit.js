import React from 'react';
import Input from '../../../components/material-input-fields/material.input.tsx';
const Edit = ({ control, handleSubmit, onSubmit, errors, setEditMode }) => {
  return (
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
          className="bg-green-400 rounded-md text-white px-2"
          type="submit"
        >
          Save
        </button>
        <button
          className="bg-green-400 rounded-md text-white px-2"
          onClick={() => setEditMode(false)}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default Edit;
