import React, { useState } from "react";
import { Link } from "react-router-dom";

const EnterVerification = () => {
  const [otp, setOtp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("OTP Submitted:", otp);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-left mb-4">
          Enter Verification Code
        </h2>
        <p className="text-left text-gray-600 mb-4 ">
          Enter the verification code received via SMS
        </p>

        <p className="text-left text-sm text-gray-600">
          Didn't receive the code?{" "}
          <Link to="#" className="text-blue-600 font-medium">
            Resend OTP
          </Link>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <label className="block text-gray-700 font-medium">Username</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 mt-4"
              required
            />
          </div>

          <div className="flex justify-start mt-7">
            <button
              type="submit"
              className="py-2 px-8 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:cursor-pointer"
            >
              Reset Your Password
            </button>
          </div>
        </form>

        <div className="text-left mt-5">
          <Link to="/login" className="text-blue-600 underline">
            Return to Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EnterVerification;
