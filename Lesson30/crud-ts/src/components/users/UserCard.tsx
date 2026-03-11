import React from "react";
import { Link } from "react-router-dom";
import type { UserList } from "../../interfaces/userList.inteface";

interface UserCardProps extends UserList { onDelete: (id: string) => void }

const UserCard: React.FC<UserCardProps> = ({ firstname, lastname, email, id, onDelete }) => {
  return (
    <div className="card my-3 text-center" style={{ width: "18rem" }}>
      <div className="card-body">
        <div className="card-body">
          <h5 className="card-title">{firstname} {lastname}</h5>
          <p className="card-text">{email}</p>
        </div>

        <Link to={`/update-users/${id}`} className="btn btn-success me-1">Edit</Link>
        <button type="button" onClick={() => onDelete(id)} className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
};

export default UserCard;
