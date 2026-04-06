import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
      {/* Hero Section */}
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Welcome to React Query App</h1>

      <p className="text-gray-600 max-w-xl mb-8">Explore users and todos powered by
        <span className="font-semibold"> TanStack Query</span>. Fast, optimized and modern data fetching experience.
      </p>

      {/* Buttons */}
      <div className="flex gap-4 mb-12">
        <button type="button" onClick={() => navigate("/users")}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition hover:cursor-pointer"
        >
          View Users
        </button>

        <button type="button" onClick={() => navigate("/todos")}
          className="bg-gray-200 text-gray-800 px-6 py-3 rounded-xl hover:bg-gray-300 transition hover:cursor-pointer"
        >
          View Todos
        </button>
      </div>

      {/* Features */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl w-full">
        <div className="p-6 bg-white rounded-2xl shadow border">
          <h3 className="text-lg font-semibold mb-2">⚡ Fast Fetching</h3>
          <p className="text-sm text-gray-600">Data is cached and updated efficiently using React Query.</p>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow border">
          <h3 className="text-lg font-semibold mb-2">🔄 Smart Caching</h3>
          <p className="text-sm text-gray-600">Automatic background updates and caching for better UX.</p>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow border">
          <h3 className="text-lg font-semibold mb-2">📱 Responsive UI</h3>
          <p className="text-sm text-gray-600">Fully responsive design built with Tailwind CSS.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;