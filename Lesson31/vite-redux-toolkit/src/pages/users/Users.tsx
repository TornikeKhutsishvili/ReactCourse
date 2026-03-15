import React from 'react'
import UsersList from '../../components/users/UsersList';
import useGetUsers from '../../hooks/useGetUsers';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../store';
import { deleteUser } from '../../store/users/thunks/users.thunks';
import { useNavigate } from 'react-router-dom';

const Users: React.FC = () => {
  const navigate = useNavigate();
  const { users, loading, error } = useGetUsers();
  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = (id: number) => {
    dispatch(deleteUser(id));
  };

  const handleDetail = (id: number) => {
    navigate(`/user-detail/${id}`);
  };

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="users">
      <UsersList users={users} onDelete={handleDelete} onDetail={handleDetail} />
    </div>
  )
}

export default Users;