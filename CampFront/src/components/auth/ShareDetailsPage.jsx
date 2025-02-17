import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateFormData, resetFormData } from "../../redux/formSlice";
import axios from "axios";
import { toast } from "react-toastify";

const ShareDetailsPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [company, setCompany] = useState("");

  const formData = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const fullName = `${firstName} ${lastName}`.trim();

    dispatch(updateFormData({ fullName, phoneNumber, company }));

    const combinedData = new URLSearchParams({
      userName: formData.userName,          
      email: formData.email,
      fullName,
      password: formData.password,      
      phoneNumber,
      company,                        
    });

    console.log("Combined Form Data:", combinedData.toString());

    try {
      const response = await axios.post(
        "http://localhost:8080/auth/signup",
        combinedData, 
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded", // Set content type to urlencoded
          },
        }
      );
      toast.success("Registration successful!");
      dispatch(resetFormData()); // Clear the form data from Redux store
    } catch (error) {
      console.error("Error submitting data", error);
      toast.error("Failed to register. Please try again.");
    }
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
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700">Company Name</label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
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
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
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
