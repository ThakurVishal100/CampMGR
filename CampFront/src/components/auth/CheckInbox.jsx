import React from "react";
import { Link } from "react-router-dom";

const CheckInbox = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4">Check your email</h2>
        <p className="text-gray-600 mb-6 text-left">
          We have emailed an activation link to (your account). Please check
          your inbox to activate your account.
        </p>
        <div className="flex justify-center gap-8 mb-6">
          <button className="text-black-500">Open Gmail</button>
          <button className="text-black-500">Open Outlook</button>
        </div>
        <p className="font-semibold pt-10">
          Didn’t get an email? Check your spam folder
        </p>
        <Link to={"/resend-mail"} className="text-blue-500 mt-2 inline-block">
          <p className="underline">Re-enter your email and try again</p>
        </Link>
      </div>
    </div>
  );
};

export default CheckInbox;
