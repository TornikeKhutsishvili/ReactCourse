import React from "react";
import { Link } from "react-router-dom";
import type { UserList } from "../interfaces/userList.inteface";

const UserCard: React.FC<UserList> = ({
  firstname,
  lastname,
  email,
  id,
  onDelete,
}) => {
  return (
    <div className="card my-3 text-center" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {firstname} {lastname}
        </h5>

        <p className="card-text">{email}</p>

        <Link to={`/update-users/${id}`} className="btn btn-success me-1">
          Edit
        </Link>

        <button type="button" onClick={onDelete} className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
