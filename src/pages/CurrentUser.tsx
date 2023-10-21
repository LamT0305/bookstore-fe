import React, { useState } from "react";
import Menu from "../components/user/menu/Menu";
import CustomerInfor from "../components/user/information/CustomerInfor";
import Update from "../components/user/update/Update";
import Order from "../components/user/order/Order";

const CurrentUser: React.FC = () => {
  const [tabId, setTabId] = useState(1);

  return (
    <div className="inner-page" style={{ display: "flex" }}>
      <Menu tabId={tabId} setTabId={setTabId} />
      {tabId === 1 ? <CustomerInfor /> : null}
      {tabId === 2 ? <Update /> : null}
      {tabId === 3 ? <Order /> : null}
    </div>
  );
};

export default CurrentUser;
