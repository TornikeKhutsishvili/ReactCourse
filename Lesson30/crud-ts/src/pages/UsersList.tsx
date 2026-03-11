import { useDispatch } from "react-redux";
import { deleteUser } from "../store/users/thunks/users.thunks";
import type { AppDispatch } from "../store";
import useGetUsers from "../hooks/useGetUsers";
import UsersListComp from "../components/users/UsersListComp";

const UsersList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users, loading, error } = useGetUsers();

  const handleDelete = (id: string) => { dispatch(deleteUser(id)) };

  if (loading) return <p>Data Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mt-5" style={{ minHeight: "85vh" }}>
      <h2 className="text-center mb-4">Users List</h2>
      <div className="d-flex flex-wrap gap-4 justify-content-center">
        <UsersListComp users={users} onDelete={handleDelete} />
      </div>
    </div>
  );
};

export default UsersList;