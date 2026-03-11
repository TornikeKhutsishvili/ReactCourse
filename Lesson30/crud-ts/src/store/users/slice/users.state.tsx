import type { UserList } from "../../../interfaces/userList.inteface";

type TypeError = string | null;

export interface IUsersState {
  userList: UserList[];
  loading: boolean;
  error: TypeError;
}

export const initialState: IUsersState = {
  userList: [],
  loading: false,
  error: null,
};