import React, { useState } from "react";
import useAuth from "../../../redux/hooks/useAuth";
import "./style.css";

const Update: React.FC = () => {
  const { user } = useAuth();
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [address, setAddress] = useState(user.address);
  const [phone, setPhone] = useState(user.phone);
  return (
    <div className="update-user-info">
      <h3>Update user information:</h3>
      <form className="form-update">
        <div className="input-field">
          <label htmlFor="firstname">First name:</label>
          <input
            type="text"
            id="firstname"
            placeholder=""
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="lastname">Last name: </label>
          <input
            type="text"
            id="lastname"
            placeholder=""
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="address">Address: </label>
          <input
            type="text"
            id="address"
            placeholder=""
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="phone">Phone: </label>
          <input
            type="text"
            id="phone"
            placeholder=""
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button className="btn-submit">Update</button>
      </form>
    </div>
  );
};

export default Update;
