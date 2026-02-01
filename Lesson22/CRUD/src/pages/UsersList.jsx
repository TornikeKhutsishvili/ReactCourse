import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "../components/UserCard";
import { usersSelector } from "../store/users/users.slice";
import { getUsers, deleteUser } from "../store/users/users.thunks";

const UsersList = () => {
  const { loading, error } = useSelector(usersSelector);
  const userList = useSelector(usersSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  if (loading) return <p>Data Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="users-wrapper" style={{ minHeight: "85vh" }}>
      <div className="container">

        {userList?.length > 0 && (
          <div className="user-list mt-5">
            <h2 className="mb-4 text-center">User List</h2>
            <div className="d-flex flex-wrap justify-content-center gap-4">
              {userList.map((user) => (
                <UserCard
                  key={user.id}
                  {...user}
                  onDelete={() => handleDelete(user.id)}
                />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default UsersList;
