import React, { useState } from "react";
import useAuth from "../../../redux/hooks/useAuth";
import "./style.css";

interface props {
  tabId: number;
  setTabId: (value: number) => void;
}

const Menu: React.FC<props> = ({ tabId, setTabId }) => {
  const { handleLogOut } = useAuth();
  return (
    <div
      className="customer-menu"
      style={{
        backgroundColor: "#2f4858",
        color: "white",
        width: "20%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
          listStyle: "none",
        }}
      >
        <li
          onClick={() => setTabId(1)}
          className={tabId == 1 ? "tab-active" : ""}
        >
          User information
          <hr />
        </li>
        <li
          onClick={() => setTabId(2)}
          className={tabId == 2 ? "tab-active" : ""}
        >
          Update user information
          <hr />
        </li>
        <li
          onClick={() => setTabId(3)}
          className={tabId == 3 ? "tab-active" : ""}
        >
          View order history
          <hr />
        </li>
        <li style={{ cursor: "pointer" }} onClick={handleLogOut}>
          Log out
          <hr />
        </li>
      </ul>
    </div>
  );
};

export default Menu;
