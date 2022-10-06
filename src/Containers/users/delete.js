import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { deleteUsers } from '../../api/usersApi';

const Delete = ({ id }) => {
  const queryClient = useQueryClient();

  const deleteUserMutation = useMutation(deleteUsers, {
    onSuccess: () => {
      queryClient.invalidateQueries('users');
    },
  });

  const handleDelete = () => {
    deleteUserMutation.mutate({ id: id });
  };

  return (
    <button onClick={handleDelete}>
      <span class="material-symbols-outlined">delete</span>
    </button>
  );
};

export default Delete;
