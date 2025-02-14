import React from "react";
import { useNavigate } from "react-router-dom";

const ShareDetailsPage = () => {
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate("/next-step"); 
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-semibold text-center mb-4">
          Share a few details to register
        </h1>

        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                name="firstName"
                required
                className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                name="lastName"
                
                className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700">Company Name</label>
            <input
              type="text"
              name="company"
             
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
            />
            <p className="text-xs text-gray-500 mt-1">
              You can update this later in your settings.
            </p>
          </div>

          <div>
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default ShareDetailsPage;
