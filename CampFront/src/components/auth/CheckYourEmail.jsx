import React from "react";
import { useNavigate } from "react-router-dom";

const CheckYourEmail = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-6">
      <div className="w-full max-w-sm bg-white shadow-lg rounded-lg p-6 text-center">
        <h2 className="text-xl font-semibold mb-4">Check your email</h2>
        <p className="text-gray-600 text-sm mb-6">
          If a username is associated with your email ID, you'll receive an email shortly.
          Please check your spam folder if it doesn't appear in your inbox.
        </p>
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium"
          onClick={() => navigate("/login")}
        >
          Return to Login
        </button>
      </div>
    </div>
  );
};

export default CheckYourEmail;
