import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, deleteUser } from "../store/users/users.thunks";
import {
  userListSelector,
  usersErrorSelector,
  usersLoadingSelector,
} from "../store/users/users.slice";
import type { AppDispatch } from "../store";
import UserCard from "../components/UserCard";

const UsersList = () => {
  const users = useSelector(userListSelector);
  const loading = useSelector(usersLoadingSelector);
  const error = useSelector(usersErrorSelector);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleDelete = (id: string) => {
    dispatch(deleteUser(id));
  };

  if (loading) return <p>Data Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mt-5" style={{ minHeight: "85vh" }}>
      <h2 className="text-center mb-4">Users List</h2>

      <div className="d-flex flex-wrap gap-4 justify-content-center">
        {users.map((user) => (
          <UserCard
            key={user.id}
            {...user}
            onDelete={() => handleDelete(user.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default UsersList;
