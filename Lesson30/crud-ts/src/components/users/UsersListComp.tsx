import React from "react";
import type { UserList } from "../../interfaces/userList.inteface";
import UserCard from "./UserCard";

interface UserListProps {
  users: UserList[];
  onDelete: (id: string) => void;
}

const UsersListComp: React.FC<UserListProps> = ({ users, onDelete }) => {
  return (
    <>
      {users.map((user) => (
        <UserCard key={user.id} {...user} onDelete={onDelete} />
      ))}
    </>
  );
};

export default UsersListComp;
