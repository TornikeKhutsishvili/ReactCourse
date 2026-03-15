import React from "react";
import { Link } from "react-router-dom";

interface UserCardProps {
  id: number;
  name: string;
  username: string;
  email: string;
  street: string;
  city: string;
  zipcode: string;
  phone: string;
  website: string;
  companyName: string;
  onDelete: (id: number) => void;
  onDetail: (id: number) => void;
}

const UserCard: React.FC<UserCardProps> = ({
  id, name, username, email, street, city, zipcode, phone, website, companyName, onDelete, onDetail
}) => {
  return (
    <div className="card my-3 text-center" style={{ width: "18rem" }} onClick={() => onDetail(id)}>
      <div className="card-body">
        <div>
          <h5 className="card-title">{name} {username}</h5>
          <p className="card-text">{email}</p>
          <p className="card-text">{street}</p>
          <p className="card-text">{city}</p>
          <p className="card-text">{zipcode}</p>
          <p className="card-text">{phone}</p>
          <p className="card-text">{website}</p>
          <p className="card-text">{companyName}</p>
        </div>

        <div className="btn-group">
          <Link to={`/update-user/${id}`} className="btn btn-primary">Edit</Link>
          <button type="button" onClick={() => onDelete(id)} className="btn btn-outline">Delete</button>
        </div>
        <div>
          <Link to={`/user-detail/${id}`} className="btn btn-outline" style={{width: "100%", marginTop: "10px"}}>
            User Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserCard;