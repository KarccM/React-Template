import React from 'react';
import { columns } from '../Containers/users/data';
import Table from '../components/Table';
import { useQuery } from 'react-query';
import { getUsers } from '../api/usersApi';
const Users = () => {
  const { isLoading, error, data: users } = useQuery('users', getUsers);

  return (
    <>{!isLoading && !error && <Table columns={columns} data={users} />}</>
  );
};

export default Users;
