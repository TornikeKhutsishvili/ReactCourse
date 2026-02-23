/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import type { UserInterface } from "../interfaces/user.interface";

export const loader = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

const Users: React.FC = () => {
  const users = useLoaderData() as UserInterface[];

  return (
    <>
      {users.map(({ id, name, username, phone }) => (
        <Link key={id} to={`/users/${id}`} state={{ message: `Hello ${name}` }}>
          <h1>
            {name} | {username} | {phone}
          </h1>
        </Link>
      ))}
    </>
  );
};

export default Users;
