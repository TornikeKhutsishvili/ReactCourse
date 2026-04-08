import React from 'react'
import ErrorPage from '../ErrorPage';
import useFetchUser from '../../../core/hooks/queries/users/useFetchUser';
import { useParams } from 'react-router-dom';
import UserItem from '../../../shared/components/users/UserItem';

const UserPage:React.FC = () => {
  const { id } = useParams()
  const { data: user, error, isLoading } = useFetchUser(Number(id!));

  if (error) return <ErrorPage />;
  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <img src="/loading.gif" alt="loading" className="w-16 h-16" />
      </div>
    );
  if (!user) return <p>No data</p>;

  return (
    <UserItem
      key={user.id} id={user.id} name={user.name} username={user.username} email={user.email}
      phone={user.phone} website={user.website} address={user.address} company={user.company}
    />
  )
}

export default UserPage