import React, { useCallback } from "react";
import "../../styles/Profile.css";
import { useNavigate } from "react-router-dom";

const Profile: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <>
      <div className="container">
        <h1>Profile</h1>
        <p>Welcome to your profile</p>
        <button type="button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </>
  );
};

export default Profile;
