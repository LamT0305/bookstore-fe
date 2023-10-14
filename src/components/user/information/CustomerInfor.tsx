import React, { useEffect } from "react";
import useAuth from "../../../redux/hooks/useAuth";
import "./style.css";

type Props = {};

function CustomerInfor({}: Props) {
  const { isLoading, handleGetCurrentUser, user } = useAuth();
  useEffect(() => {
    handleGetCurrentUser();
  }, []);
  console.log(user);
  return (
    <div className="customer-infor">
      <h3>User information:</h3>
      <ul className="list-info">
        <li>
          First name: {user.firstName}
          <hr />
        </li>
        <li>
          Last name: {user.lastName}
          <hr />
        </li>
        <li>
          Email: {user.email}
          <hr />
        </li>
        <li>
          Address: {user.address}
          <hr />
        </li>
        <li>
          Phone number: {user.phone}
          <hr />
        </li>
      </ul>
    </div>
  );
}

export default CustomerInfor;
