import React from 'react'
import { useParams } from 'react-router-dom';
import useGetUsers from '../../hooks/useGetUsers';

const UserDetails: React.FC = () => {
  const { id } = useParams();
  const { users, loading, error } = useGetUsers();
  const user = users.find((u) => u.id === Number(id))

  if (loading) return <p>Loading . . .</p>;
  if (error) return <p>Error loading user data</p>;
  if (!user) return <p>User not found!</p>;

  return (
    <div className="user">
      {user && (
        <>
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">{user.name}</h2>
              <p className="card-text">Email: {user.email}</p>
              <p className="card-text">Username: {user.username}</p>
              <p className="card-text">Phone: {user.phone}</p>
              <p className="card-text">City: {user.address.city}</p>
              <p className="card-text">Street: {user.address.street}</p>
              <p className="card-text">Zip: {user.address.zipcode}</p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default UserDetails;