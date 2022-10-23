import React from 'react';
import { useQuery } from 'react-query';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getUserById } from '../../api/usersApi';
import { useForm } from 'react-hook-form';
import { updateUsers } from '../../api/usersApi';
import { useMutation, useQueryClient } from 'react-query';
import CircularProgress from '@mui/material/CircularProgress';
import { userResolver } from './data';
import Edit from './particles/edit';
import View from './particles/view';
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
    userResolver,
    defaultValues: {
      first_name: user?.first_name,
      last_name: user?.last_name,
      country: user?.country,
      salary: user?.salary,
      age: user?.age,
    },
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
          <Edit
            control={control}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            errors={errors}
            setEditMode={setEditMode}
          />
        ) : (
          !isLoading &&
          !isFetching && (
            <View user={user} setEditMode={setEditMode} navigate={navigate} />
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
