import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateSignUpData, resetSignUpData } from "../../redux/signupSlice";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ShareDetailsPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [company, setCompany] = useState("");
  const navigate = useNavigate();

  const signupData = useSelector((state) => state.signUp);
  const dispatch = useDispatch();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const fullName = `${firstName} ${lastName}`.trim();

    dispatch(updateSignUpData({ fullName, phoneNumber, company }));

    console.log("Form Data from Redux:", signupData);

    const combinedData = new URLSearchParams({
      userName: signupData.userName,
      email: signupData.email,
      password: signupData.password,
      fullName,
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
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      console.log(response.data);
      toast.success("Registration successful!");
      dispatch(resetSignUpData());
      navigate("/");
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

          <div className="flex justify-end">
            <button
              type="submit"
              className="py-2 px-8 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:cursor-pointer"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShareDetailsPage;



