import React from 'react';
import { useQuery } from 'react-query';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getUserById } from '../../api/usersApi';
import Input from '../../components/material-input-fields/material.input.tsx';
import { resolver } from '../../Containers/users/singel.user';
import { useForm } from 'react-hook-form';
import { updateUsers } from '../../api/usersApi';
import { useMutation, useQueryClient } from 'react-query';
import CircularProgress from '@mui/material/CircularProgress';

const User = () => {
  const { id } = useParams();
  const [editMode, setEditMode] = React.useState(false);
  const {
    isLoading,
    isError,
    isFetching,
    data: user,
  } = useQuery([`user-${id}`, id], getUserById);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver,
  });
  const queryClient = useQueryClient();
  const updateUserMutation = useMutation(updateUsers, {
    onSuccess: () => {
      queryClient.invalidateQueries(`user-${id}`);
    },
  });
  const onSubmit = (data) => {
    data.id = id;
    updateUserMutation.mutate({ user: data });
    setEditMode(false);
  };
  const navigate = useNavigate();
  return (
    <div>
      {!isError ? (
        editMode ? (
          <div className="flex h-screen justify-center items-center bg-blue-200">
            <form
              className="flex flex-col bg-gray-50 p-8 border rounded-md gap-y-4 text-center text-xl"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Input
                defaultValue={user.first_name}
                name={'first_name'}
                control={control}
                error={errors?.first_name ? true : false}
              />
              <Input
                defaultValue={user.last_name}
                name={'last_name'}
                control={control}
                error={errors?.last_name ? true : false}
              />
              <Input
                defaultValue={user.country}
                name={'country'}
                control={control}
                error={errors?.country ? true : false}
              />
              <Input
                defaultValue={user.salary}
                name={'salary'}
                control={control}
                error={errors?.salary ? true : false}
              />
              <Input
                defaultValue={user.age}
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
        ) : (
          !isLoading &&
          !isFetching && (
            <div className="flex h-screen justify-center items-center bg-blue-200">
              <div className="flex flex-col bg-gray-50 p-8 border rounded-md gap-y-4 text-center text-xl">
                <div>id : {id}</div>
                <div>first_name : {user?.first_name}</div>
                <div>last_name : {user?.last_name}</div>
                <div>age : {user?.age}</div>
                <div>salary : {user?.salary}</div>
                <div>country : {user?.country}</div>
                <button
                  className="bg-orange-500 text-white rounded-md"
                  onClick={() => setEditMode(true)}
                >
                  Edit
                </button>
                <button
                  className="bg-gray-500 text-white rounded-md"
                  onClick={() => navigate(-1)}
                >
                  Back
                </button>
              </div>
            </div>
          )
        )
      ) : !isFetching ? (
        <Navigate to="/users" />
      ) : (
        <CircularProgress />
      )}
      {isFetching ? (
        <div className="text-center flex h-screen justify-center items-center">
          <CircularProgress />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default User;
