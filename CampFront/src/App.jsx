import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecoverUsername from "./components/auth/RecoverUsername";
import SignUp from "./components/auth/SignUp";
import Login from "./components/auth/Login";
import ResetPassword from "./components/auth/ResetPassword";
import ShareDetailsPage from "./components/auth/ShareDetailsPage";
import CheckYourEmail from "./components/auth/CheckYourEmail";
import EnterVerification from "./components/auth/EnterVerification";
import { ToastContainer } from 'react-toastify';
import WelcomeAboard from "./components/pages/WelcomeAboard";
import CheckInbox from "./components/auth/CheckInbox";
import ResendMail from "./components/auth/ResendMail";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeAboard />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recover-username" element={<RecoverUsername />} />
        <Route path="/forgot-password" element={<ResetPassword />} />
        <Route path="/share-details" element={<ShareDetailsPage />} />
        <Route path="/recover-username/check-mail" element={<CheckYourEmail />} />
        <Route path="/forget-password/otp" element={<EnterVerification />} />
        <Route path="/check-inbox" element={<CheckInbox />} />
        <Route path="/resend-mail" element={<ResendMail />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
