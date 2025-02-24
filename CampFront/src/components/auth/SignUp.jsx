import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateSignUpData } from "../../redux/signupSlice";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSignUpData({ email, userName, password }));
    navigate("/share-details");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="w-full sm:w-96 bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-semibold text-center mb-6">Sign Up</h2>
        <p className="text-sm text-center mb-4">
          Create a free account or{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Log In
          </Link>
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer"
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="py-2 px-8 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:cursor-pointer"
            >
              Sign Up
            </button>
          </div>
        </form>

        <p className="text-xs text-center mt-4">
          By creating an account, you accept our{" "}
          <Link to="#" className="text-blue-500 hover:underline">
            Terms
          </Link>{" "}
          and confirm that you have read and understood our{" "}
          <Link to="#" className="text-blue-500 hover:underline">
            Privacy Statement
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Signup;
