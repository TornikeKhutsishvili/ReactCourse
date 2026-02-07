import UserForm, { type IonFormSubmit } from "../components/UserForm";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import { getUsers, updateUser } from "../store/users/users.thunks";
import type { AppDispatch } from "../store";
import {
  userListSelector,
  usersErrorSelector,
  usersLoadingSelector,
} from "../store/users/users.slice";

const UpdateUsers = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();
  const navigate = useNavigate();

  const users = useSelector(userListSelector);
  const loading = useSelector(usersLoadingSelector);
  const error = useSelector(usersErrorSelector);

  useEffect(() => {
    if (!users.length) {
      dispatch(getUsers());
    }
  }, [dispatch, users.length]);

  const currentUser = useMemo(
    () => users.find((u) => String(u.id) === id),
    [users, id],
  );

  const onSubmit: IonFormSubmit = (data) => {
    if (!id || !currentUser) return;

    dispatch(
      updateUser({
        id,
        user: { ...currentUser, ...data },
      }),
    )
      .unwrap()
      .then(() => navigate("/users-list"));
  };

  if (loading) return <p>Loading user data...</p>;
  if (error) return <p>Error loading user data</p>;
  if (!currentUser) return <p>User not found</p>;

  return (
    <>
      <div style={{ minHeight: "80vh" }}>
        <UserForm
          key={id}
          firstname={currentUser.firstname}
          lastname={currentUser.lastname}
          email={currentUser.email}
          onFormSubmit={onSubmit}
        />
      </div>
    </>
  );
};

export default UpdateUsers;
