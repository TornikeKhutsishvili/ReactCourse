import type { IUser } from "./IUser";

export interface IAuthContext {
  user: IUser;
  loading: boolean;
  logout: () => void;
}
