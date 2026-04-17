import React from 'react';
import useFetchUsers from '../../../core/hooks/queries/users/useFetchUsers';
import ErrorPage from '../ErrorPage';
import UserList from '../../../shared/components/users/UserList';

const UsersPage: React.FC = () => {
  const { data: users, error, isLoading } = useFetchUsers();

  if (error) return <ErrorPage />;
  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <img src="/loading.gif" alt="loading" className="w-16 h-16" />
      </div>
    );

  return (
    <UserList users={users} />
  );
};

export default UsersPage;