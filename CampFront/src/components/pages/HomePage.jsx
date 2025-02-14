import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-semibold text-center">
          Welcome to Campaign Manager
        </h1>
        <p className="text-gray-600 text-center mt-2">
          Manage your campaigns efficiently.
        </p>

        <div className="mt-6">
          <Link
            to="/login"
            className="w-full block bg-blue-600 text-white py-2 text-center rounded-lg hover:bg-blue-700"
          >
            Log In
          </Link>
          <Link
            to="/signup"
            className="w-full block bg-gray-200 text-black py-2 text-center rounded-lg hover:bg-gray-300 mt-3"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
