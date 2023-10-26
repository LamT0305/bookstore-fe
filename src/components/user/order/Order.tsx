import React, { useEffect } from "react";
import useUser from "../../../redux/hooks/userUser";

function Order() {
  const { orders, handleGetOrderHistory } = useUser();
  useEffect(()=>{
    handleGetOrderHistory();
  },[])
  console.log(orders)
  return <div>


  </div>;
}

export default Order;
