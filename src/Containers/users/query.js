/*
import { useQuery, useMutation, useQueryClient } from 'react-query';
import {
  getUsers,
  addUsers,
  updateUsers,
  deleteUsers,
} from '../../api/usersApi';
export const Any = () => {
  const queryClient = useQueryClient();

  const { isLoading, error, data: users } = useQuery('users', getUsers);

  const addUserMutation = useMutation(addUsers, {
    onSuccess: () => {
      queryClient.invalidateQueries('users');
    },
  });

  const updateUserMutation = useMutation(updateUsers, {
    onSuccess: () => {
      queryClient.invalidateQueries('users');
    },
  });

  const deleteUserMutation = useMutation(deleteUsers, {
    onSuccess: () => {
      queryClient.invalidateQueries('users');
    },
  });

};
*/
