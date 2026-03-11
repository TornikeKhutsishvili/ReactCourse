import UserForm from "../components/users/UserForm";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import { getUsers } from "../store/users/thunks/users.thunks";
import { useUpdateUser } from "../hooks/useUpdateUser";
import { userListSelector, usersErrorSelector, usersLoadingSelector } from "../store/users/slice/users.selector";
import type { AppDispatch } from "../store";
import type { UserFormSubmit } from "../interfaces/userForm.interface";

const UpdateUsers = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector(userListSelector);
  const loading = useSelector(usersLoadingSelector);
  const error = useSelector(usersErrorSelector);
  const { updateUserHandler } = useUpdateUser();

  useEffect(() => {
    if (!users.length) {
      dispatch(getUsers());
    }
  }, [dispatch, users.length]);

  const currentUser = useMemo(() => users.find((u) => String(u.id) === id), [users, id]);

  if (loading) return <p>Loading user data...</p>;
  if (error) return <p>Error loading user data</p>;
  if (!currentUser) return <p>User not found</p>;

  const onSubmit = (data: UserFormSubmit) => {
    if (!id || !currentUser) return;
    updateUserHandler(id, currentUser, data);
  };

  return (
    <div style={{ minHeight: "80vh" }}>
      <UserForm
        key={id} firstname={currentUser.firstname} lastname={currentUser.lastname} email={currentUser.email} onFormSubmit={onSubmit} />
    </div>
  );
};

export default UpdateUsers;