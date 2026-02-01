import { useNavigate, useParams } from "react-router-dom";
import UserForm from "../components/UserForm";
import { useDispatch, useSelector } from "react-redux";
import { usersSelector } from "../store/users/users.slice";
import { useEffect, useMemo } from "react";
import { getUsers, updateUser } from "../store/users/users.thunks";

const UpdateUsers = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const { loading, error } = useSelector(usersSelector);
  const userList = useSelector(usersSelector);

  useEffect(() => {
    if (!userList.length) {
      dispatch(getUsers());
    }
  }, [dispatch, userList.length]);

  const currentUser = useMemo(
    () => userList.find((user) => String(user.id) === id),
    [userList, id],
  );

  const onSubmit = (firstname, lastname, email) => {
    const updatedUser = { ...currentUser, firstname, lastname, email };
    dispatch(updateUser({ id, user: updatedUser }))
      .unwrap()
      .then(() => navigate("/users-list"))
      .catch((err) => console.error(err));
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
