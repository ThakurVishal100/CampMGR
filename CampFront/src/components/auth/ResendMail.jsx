import React from "react";

const ResendMail = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Resend activation email
        </h2>
        <p className="text-gray-600 mb-6">
          We've sent you an email with an activation link. If you haven't
          received it, you can re-enter your email address or use a different
          one, and we'll send a new activation link.
        </p>
        <form>
          <label className="block font-semibold mb-1">Username</label>
          <input type="text" className="w-full p-2 border rounded mb-4" />

          <label className="block font-semibold mb-1">Password</label>
          <input type="password" className="w-full p-2 border rounded mb-4" />

          <label className="block font-semibold mb-1">Email</label>
          <input type="email" className="w-full p-2 border rounded mb-4" />

          <label className="block font-semibold mb-1">Confirm Email</label>
          <input type="email" className="w-full p-2 border rounded mb-6" />

          <div className="flex justify-end">
            <button
              type="submit"
              className="py-2 px-8 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResendMail;
