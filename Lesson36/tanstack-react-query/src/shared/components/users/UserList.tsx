import React from "react";
import type { IUser } from "../../../core/interfaces/user.interfaces";
import UserItem from "./UserItem";

interface UserListProps {
  users: IUser[] | undefined;
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Users</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {users?.map(
          ({ id, name, username, email, phone, website, address, company }: IUser) => (
            <UserItem
              key={id} id={id} name={name} username={username} email={email}
              phone={phone} website={website} address={address} company={company}
            />
          ),
        )}
      </div>
    </div>
  );
};

export default UserList;