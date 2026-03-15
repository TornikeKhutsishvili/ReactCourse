import type { IAddress, ICompany } from "./userList.inteface";

export type AddUserInput = {
  name: string,
  username: string,
  email: string,
  address: IAddress,
  phone: string,
  website: string,
  company: ICompany
};