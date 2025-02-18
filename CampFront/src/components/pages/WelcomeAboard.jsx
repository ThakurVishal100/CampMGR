import React from "react";
import HomePage from "./HomePage";
import { Link } from "react-router-dom";

const WelcomeAboard = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4">Welcome aboard!</h2>
        <Link to={"/signup"} className="bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-700">
          Activate account
        </Link>
        <p className="text-gray-600 mt-4">
          (Just a quick identity verification to get you started)
        </p>
      </div>
      {/* <HomePage /> */}
    </div>
  );
};

export default WelcomeAboard;
