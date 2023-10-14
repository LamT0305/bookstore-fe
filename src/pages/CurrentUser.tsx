import React from "react";
import Menu from "../components/user/menu/Menu";
import CustomerInfor from "../components/user/information/CustomerInfor";


const CurrentUser: React.FC = () => {
  return (
    <div className="inner-page" style={{display:'flex'}}>
      <Menu />
      <CustomerInfor/>
    </div>
  );
};

export default CurrentUser;
