import { useQuery } from "@tanstack/react-query";
import fetchUsers from "../../../api/user/fetchUsers.api";
import type { IUser } from "../../../interfaces/user.interfaces";

const useFetchUsers = () => {
  const result = useQuery<IUser[]>({
    queryKey: ["todos"],
    queryFn: fetchUsers,
  });

  return result;
};

export default useFetchUsers;