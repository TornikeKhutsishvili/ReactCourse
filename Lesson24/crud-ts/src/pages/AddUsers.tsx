import UserForm, { type IonFormSubmit } from "../components/UserForm";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../store/users/users.thunks";
import type { AppDispatch } from "../store";
import {
  usersErrorSelector,
  usersLoadingSelector,
} from "../store/users/users.slice";

const AddUsers = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const loading = useSelector(usersLoadingSelector);
  const error = useSelector(usersErrorSelector);

  const onSubmit: IonFormSubmit = (data) => {
    dispatch(addUser(data))
      .unwrap()
      .then(() => navigate("/users-list"));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className="add-users-wrapper" style={{ minHeight: "85vh" }}>
        <div className="container">
          <UserForm onFormSubmit={onSubmit} />
        </div>
      </div>
    </>
  );
};

export default AddUsers;
