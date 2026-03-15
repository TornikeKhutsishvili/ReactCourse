import type { IAddress, ICompany } from "./userList.inteface"

export type UserFormSubmit = {
  name: string,
  username: string,
  email: string,
  address: IAddress,
  phone: string,
  website: string,
  company: ICompany
}
