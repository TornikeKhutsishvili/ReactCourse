import { useEffect, useMemo } from "react";
import UserForm from "../../components/users/UserForm";
import useGetUsers from "../../hooks/useGetUsers";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store";
import type { UserFormSubmit } from "../../interfaces/userForm.type";
import type { UserList } from "../../interfaces/userList.inteface";
import { useUpdateUser } from "../../hooks/useUpdateUser";
import { getUsers } from "../../store/users/thunks/users.thunks";

const UpdateUsers = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { users, loading, error } = useGetUsers();
  const { updateUserHandler } = useUpdateUser();

  useEffect(() => {
    if (!users.length) {
      dispatch(getUsers());
    }
  }, [dispatch, users.length]);

  const currentUser = useMemo(
    () => users.find((u: UserList) => u.id === Number(id)), [users, id]
  );

  if (loading) return <p>Loading user data...</p>;
  if (error) return <p>Error loading user data</p>;
  if (!currentUser) return <p>User not found</p>;

  const onSubmit = (data: UserFormSubmit) => {
    if (!id || !currentUser) return;
    updateUserHandler(Number(id), currentUser, data);
  };

  return (
    <div style={{ minHeight: "80vh" }}>
      <UserForm
        key={id}
        name={currentUser.name}
        username={currentUser.username}
        email={currentUser.email}
        address={currentUser.address}
        phone={currentUser.phone}
        website={currentUser.website}
        company={currentUser.company}
        onFormSubmit={onSubmit}
      />
    </div>
  );
};

export default UpdateUsers;