import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RecoverUsername = () => {
  const [selectedOption, setSelectedOption] = useState("mobile");
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-semibold text-center">Recover Your Username</h1>
        <p className="text-gray-600 text-center mt-2">
          Forgot your username? You can retrieve it using the email address or phone number linked to your account.
        </p>

        <div className="mt-4">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="recoveryOption"
              value="email"
              checked={selectedOption === "email"}
              onChange={() => setSelectedOption("email")}
              className="form-radio text-blue-600"
            />
            <span className="pt-4">Recover using the email address associated with your account</span>
          </label>

          <label className="flex items-center space-x-2 cursor-pointer mt-2">
            <input
              type="radio"
              name="recoveryOption"
              value="mobile"
              checked={selectedOption === "mobile"}
              onChange={() => setSelectedOption("mobile")}
              className="form-radio text-blue-600"
            />
            <span className="pt-4">Recover using the mobile number linked to your account</span>
          </label>
        </div>

        <div className="mt-4">
          <label className="block text-gray-700 font-semibold">Mobile Number</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter your mobile number"
          />
        </div>

        <button
        onClick={() =>
          navigate("/recover-username/check-mail")
        }
        className="w-full bg-blue-600 text-white py-2 mt-4 rounded-lg hover:bg-blue-700">
          Recover Username
        </button>

        <div className="text-center mt-3">
          <Link to="/login" className="text-blue-600">Return to Log in</Link>
        </div>
      </div>
    </div>
  );
};

export default RecoverUsername;
