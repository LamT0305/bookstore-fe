import React, { useState } from "react";
import "../Login/style.css";
import useAuth from "../../../redux/hooks/useAuth";

interface prop {
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
}
const Register: React.FC<prop> = ({ isLogin, setIsLogin }) => {
  const { handleRegister } = useAuth();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = new FormData();
    form.append("email", username);
    form.append("passwordHash", password);
    form.append("firstName", firstName);
    form.append("lastName", lastName);
    form.append("address", address);
    form.append("phone", phone);
    handleRegister(form);
    setUserName("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setAddress("");
    setPhone("");
  };
  return (
    <div>
      <div className=" login100">
        <div className="wrap-login">
          <p className="head-lg">Register</p>
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
            <div className="input-field">
              <label htmlFor="firstname">First name</label>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                id="firstname"
                placeholder="enter your first name"
              />
            </div>
            <div className="input-field">
              <label htmlFor="lastname">Last name</label>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                id="lastname"
                placeholder="enter your last name"
              />
            </div>
            <div className="input-field">
              <label htmlFor="address">Address</label>
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                id="address"
                placeholder="enter your address"
              />
            </div>
            <div className="input-field">
              <label htmlFor="phone">phone</label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="text"
                id="phone"
                placeholder="enter your phone number"
              />
            </div>
            <button style={{ marginTop: 50 }}>Sign up</button>
          </form>
          <span onClick={() => setIsLogin(!isLogin)}>
            <p style={{ marginTop: 50, cursor: "pointer" }}>
              {" "}
              Already have account? Log in
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
