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
        <h2 className="text-2xl font-semibold text-center mb-4">Enter Verification Code</h2>
        <p className="text-center text-gray-600 mb-4">
          Enter the verification code received via SMS
        </p>

        {/* Resend OTP */}
        <p className="text-center text-sm text-gray-600">
          Didn't receive the code? <Link to="#" className="text-blue-600 font-medium">Resend OTP</Link>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <label className="block text-gray-700 font-medium">OTP</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Reset Password Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Reset Your Password
          </button>
        </form>

        {/* Return to Login */}
        <div className="text-center mt-4">
          <Link to="/login" className="text-blue-600">Return to Log in</Link>
        </div>
      </div>
    </div>
  );
};

export default EnterVerification;
