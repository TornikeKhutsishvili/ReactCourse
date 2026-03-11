import { useEffect } from "react";
import { getUsers } from "../store/users/thunks/users.thunks";
import { useDispatch, useSelector } from "react-redux";
import { userListSelector, usersErrorSelector, usersLoadingSelector } from "../store/users/slice/users.selector";
import type { AppDispatch } from "../store";

const useGetUsers = () => {
  const users = useSelector(userListSelector);
  const loading = useSelector(usersLoadingSelector);
  const error = useSelector(usersErrorSelector);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => { dispatch(getUsers()) }, [dispatch]);
  return { users, loading, error };
};

export default useGetUsers;