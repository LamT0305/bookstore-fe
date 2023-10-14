import React, { useState } from "react";
import Login from "./Login/Login";
import Register from "./Register/Register";

const Authenticate: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      {isLogin ? (
        <Login isLogin={isLogin} setIsLogin={setIsLogin} />
      ) : (
        <Register isLogin={isLogin} setIsLogin={setIsLogin} />
      )}
    </>
  );
};

export default Authenticate;
