import React, { useState } from "react";
import "./style.css";
import useAuth from "../../../redux/hooks/useAuth";

interface prop {
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
}

const Login: React.FC<prop> = ({ isLogin, setIsLogin }) => {
  const { handleLogin } = useAuth();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = new FormData();
    form.append("username", username);
    form.append("password", password);
    console.log(form)
    handleLogin(form);
    setUserName("");
    setPassword("");
  };
  return (
    <div className=" login100">
      <div className="wrap-login">
        <p className="head-lg">Login</p>
        <form className="form-login" onSubmit={handleSubmit}>
          <div className="input-field">
            <label htmlFor="user-name">Email</label>
            <input
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              id="user-name"
              placeholder="Enter your email"
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              placeholder="enter your password"
            />
          </div>
          <p style={{ textAlign: "right", cursor: "pointer" }}>
            Forgot password?
          </p>
          <button style={{ marginTop: 50 }}>LogIn</button>
        </form>

        <span onClick={() => setIsLogin(!isLogin)}>
          <p style={{ marginTop: 50, cursor: "pointer" }}> Or sign up</p>
        </span>
      </div>
    </div>
  );
};

export default Login;
