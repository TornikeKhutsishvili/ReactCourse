export interface UserList {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  onDelete?: (id: string) => void;
}
