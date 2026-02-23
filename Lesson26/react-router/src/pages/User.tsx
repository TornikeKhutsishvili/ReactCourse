import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface LocationState {
  message: string;
}

const User: React.FC = () => {
  const location = useLocation();
  const state = location.state as LocationState;
  const navigate = useNavigate();

  return (
    <>
      <div>
        <h1>{state?.message || "User!"}</h1>
      </div>
      <div>
        <button type="button" onClick={() => navigate(-1)}>
          Back to Users
        </button>
      </div>
    </>
  );
};

export default User;
