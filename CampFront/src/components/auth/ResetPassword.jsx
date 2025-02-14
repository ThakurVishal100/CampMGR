import React from "react";
import { Link,useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-6">
      <div className="w-full max-w-sm bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-center">Reset Your Password</h2>
        <p className="text-gray-600 text-center mt-2">
          We'll send you an email with reset instructions. If you can't access your email, try{" "}
          <Link to="/recover-username" className="text-blue-600">
            account recovery.
          </Link>
        </p>

        <form className="mt-4 space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Username</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <button
            type="submit"
            onClick={()=> navigate("/forget-password/otp")}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Reset Your Password
          </button>
        </form>

        <div className="text-center mt-4">
          <Link to="/login" className="text-blue-600">
            Return to Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
