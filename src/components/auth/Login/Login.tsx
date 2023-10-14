import React from "react";
import "./style.css";
const Login: React.FC = () => {
  return (
    <div className=" login100">
      <div className="wrap-login">
        <p className="head-lg">Login</p>
        <form action="" className="form-login">
          <div className="input-field">
            <label htmlFor="user-name">Username</label>
            <input
              type="text"
              id="user-name"
              placeholder="Enter your username"
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="enter your password"
            />
          </div>
          <p style={{ textAlign: "right" }}>Forgot password?</p>
          <button>LogIn</button>
        </form>
        <p style={{marginTop:50}}> Or sign up</p>
      </div>
    </div>
  );
};

export default Login;
