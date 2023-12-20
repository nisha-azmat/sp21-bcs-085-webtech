// Account.js
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Import your CSS file for styling

const HomeButton = () => (
  <Link to="/Home">
    <button className="account-button">Go to Home</button>
  </Link>
);

const LoginButton = () => (
  <Link to="/Login">
    <button className="account-button">Go to Login</button>
  </Link>
);

const RegisterButton = () => (
  <Link to="/Register">
    <button className="account-button">Go to Register</button>
  </Link>
);

const Account = () => {
  return (
    <div className="account-container">
      <h1>Account Page</h1>
      <div className="button-container">
        <HomeButton />
        <LoginButton />
        <RegisterButton />
      </div>
      {/* Add your account-related components and logic here */}
    </div>
  );
};

export default Account;
