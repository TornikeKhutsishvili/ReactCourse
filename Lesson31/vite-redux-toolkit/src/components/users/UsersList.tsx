import React from "react";
import type { UserList } from "../../interfaces/userList.inteface";
import UserCard from "./UserCard";

interface UserListProps {
  users: UserList[];
  onDelete: (id: number) => void;
  onDetail: (id: number) => void;
}

const UsersList: React.FC<UserListProps> = ({ users = [], onDelete, onDetail }) => {
  return (
    <>
      {users.map(({ address: { street, city, zipcode }, company:{ name }, ...user }) => (
        <UserCard
          key={user.id} {...user} street={street} city={city} zipcode={zipcode} companyName={name} onDelete={onDelete} onDetail={onDetail}
        />
      ))}
    </>
  );
};

export default UsersList;