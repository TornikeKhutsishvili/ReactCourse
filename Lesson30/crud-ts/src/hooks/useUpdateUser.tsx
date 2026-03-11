import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../store/users/thunks/users.thunks";
import type { AppDispatch } from "../store";
import type { UserList } from "../interfaces/userList.inteface";
import type { UserFormSubmit } from "../interfaces/userForm.interface";

export const useUpdateUser = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const updateUserHandler = async( id: string, currentUser: UserList, data: UserFormSubmit ) => {
    return dispatch( updateUser({ id, user: { ...currentUser, ...data } }) ).unwrap().then(() => { navigate("/users-list") });
  };
  return { updateUserHandler };
};