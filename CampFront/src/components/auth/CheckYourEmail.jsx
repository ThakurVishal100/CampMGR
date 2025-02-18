import React from "react";
import { useNavigate } from "react-router-dom";

const CheckYourEmail = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-6">
      <div className="w-full max-w-sm bg-white shadow-lg rounded-lg p-6 text-center">
        <div className="mb-4 flex justify-start">
          <h2 className="text-xl font-semibold mb-4">Check your email</h2>
        </div>{" "}
        <p className="text-gray-600 text-sm mb-6 text-left">
          If a username is associated with your email ID, you'll receive an
          email shortly. Please check your spam folder if it doesn't appear in
          your inbox.
        </p>
        <div className="flex justify-start pt-4">
          <button
            className="py-2 px-8 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Return to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckYourEmail;
