import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import img from "../../assets/google.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/auth/login",
        null,
        {
          params: {
            userName: username,
            password: password,
          },
        }
      );
      console.log("Response:", response.data);
      toast.success("Login Successful");
      navigate("/");
    } catch (error) {
      console.error("Login Error:", error);
      toast.error("Invalid Username or Password");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="w-full sm:w-96 bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-semibold text-center mb-6">Get Started</h2>
        <p className="text-sm text-center mb-4">
          New User?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign Up Now
          </Link>
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer"
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>
          </div>

          <div className="flex justify-between mb-6">
            <Link
              to="/recover-username"
              className="text-xs text-blue-500 underline hover:underline"
            >
              Forgot Username?
            </Link>
            <Link
              to="/forgot-password"
              className="text-xs text-blue-500 underline hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="py-2 px-8 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:cursor-pointer"
            >
              Log In
            </button>
          </div>
        </form>

        <div className="flex justify-center">
          <Link
            className="text-xs text-center mt-4 underline text-blue-500 hover:underline"
            to="/signup"
          >
            Or, if you have created your account with Google
          </Link>
        </div>
        <button className="w-full flex items-center justify-center gap-3 py-2 mt-4 bg-white text-black border border-black rounded-full font-semibold hover:bg-grey-600 focus:outline-none focus:ring-2  hover:cursor-pointer">
          <img src={img} alt="Google Logo" className="w-5 h-5" />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
