import { useNavigate } from "react-router-dom";
import UserForm from "../components/UserForm";
import { useDispatch, useSelector } from "react-redux";
import { usersSelector } from "../store/users/users.slice";
import { addUser } from "../store/users/users.thunks";

const AddUsers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector(usersSelector);

  const onSubmit = (firstname, lastname, email) => {
    const newUser = { firstname, lastname, email };

    dispatch(addUser(newUser))
      .unwrap()
      .then(() => {
        navigate("/users-list");
      })
      .catch((err) => {
        console.error("Failed to add user:", err);
      });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className="add-users-wrapper" style={{ minHeight: "80vh" }}>
        <div className="container">
          <UserForm onFormSubmit={onSubmit} />
        </div>
      </div>
    </>
  );
};

export default AddUsers;
