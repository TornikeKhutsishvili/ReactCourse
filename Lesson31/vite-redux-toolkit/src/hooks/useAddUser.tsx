import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../store/users/thunks/users.thunks";
import type { AppDispatch } from "../store";
import type { AddUserInput } from "../interfaces/addUser.type";

export const useAddUser = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const submitUser = async(data: AddUserInput) => {
    return dispatch(
      addUser(data)
    ).unwrap().then(() => {
      navigate("/users")
    });
  };

  return { submitUser };
};