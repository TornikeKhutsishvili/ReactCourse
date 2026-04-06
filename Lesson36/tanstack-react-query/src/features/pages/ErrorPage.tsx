import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 px-6 text-center">
      <h1 className="text-6xl font-bold text-red-600 mb-4">😢 Oops!</h1>
      <p className="text-xl text-gray-700 mb-6">
        Something went wrong. The page you are looking for might not exist.
      </p>
      <button type="button"
        onClick={() => navigate("/")}
        className="
          bg-red-600 text-white px-6 py-3 rounded-xl shadow hover:bg-red-700 transition hover:cursor-pointer
        "
      >
        Go Back Home
      </button>
    </div>
  );
};

export default ErrorPage;