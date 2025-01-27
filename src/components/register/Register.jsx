import React from "react";
import "./Register.css";

function Register() {
  return (
    <div className="register-container">
      <h2>Register</h2>
      <form>
        <label>Name:</label>
        <input type="text" placeholder="Enter your name" />
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" />
        <label>Password:</label>
        <input type="password" placeholder="Enter your password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
