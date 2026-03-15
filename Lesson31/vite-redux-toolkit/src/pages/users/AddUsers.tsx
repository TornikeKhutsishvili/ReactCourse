import { useSelector } from "react-redux";
import { usersErrorSelector, usersLoadingSelector } from "../../store/users/slice/users.slice";
import { useAddUser } from "../../hooks/useAddUser";
import type { UserFormSubmit } from "../../interfaces/userForm.type";
import UserForm from "../../components/users/UserForm";

const AddUsers = () => {
  const loading = useSelector(usersLoadingSelector);
  const error = useSelector(usersErrorSelector);
  const { submitUser } = useAddUser();

  const onSubmit = (data: UserFormSubmit) => {
    submitUser(data)
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="add-users-wrapper" style={{ minHeight: "85vh" }}>
      <div className="container">
        <UserForm onFormSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default AddUsers;