import { useQuery } from "@tanstack/react-query";
import type { IUser } from "../../../interfaces/user.interfaces";
import fetchUser from "../../../api/user/fetchUser.api";

const useFetchUser = (id: number) => {
  const result = useQuery<IUser>({
    queryKey: ['user', id],
    queryFn: () => fetchUser(id),
  });

  return result;
}

export default useFetchUser;