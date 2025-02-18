import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-6">
      <div className="w-full max-w-sm bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-left ">
          Reset Your Password
        </h2>
        <p className="text-gray-600 text-left mt-2">
          We'll send you an email with reset instructions. If you can't access
          your email, try{" "}
          <Link to="/recover-username" className="text-blue-600 underline">
            account recovery.
          </Link>
        </p>

        <form className="mt-4 space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Username</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 mt-5"
              required
            />
          </div>

          <div className="flex justify-start">
            <button
              type="submit"
              onClick={() => navigate("/forget-password/otp")}
              className="py-2 px-8 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:cursor-pointer"
            >
              Reset Your Password
            </button>
          </div>
        </form>

        <div className="text-left mt-4">
          <Link to="/login" className="text-blue-600 underline">
            Return to Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
