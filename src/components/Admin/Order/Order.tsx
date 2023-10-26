import React, { useState, useEffect } from "react";
import axiosInstance from "../../../utils/axios";


function Order() {
  const [orders, setOrders] = useState([] as any);
  const [selectedOrder, setSelectedOrder] = useState(null as any);

  const token = sessionStorage.getItem("accessToken")
 

  // Mô phỏng lấy dữ liệu đơn hàng từ API hoặc cơ sở dữ liệu
  useEffect(() => {
    // Thay thế đoạn mã này bằng việc gọi API hoặc truy vấn cơ sở dữ liệu
    const fetchData = async () => {
      // Giả sử data lấy từ API là một mảng các đơn hàng
      const response = await axiosInstance(
        "https://localhost:7090/api/v1/order?page=1",
        {
          headers: {
            Authorization:
              "Bearer " + sessionStorage.getItem("accessToken")
          }
        }
      );
    //   const data = await response.json();

      console.log("data: " + response);
      setOrders(response.data.orders);
    };
    fetchData();
  }, []);

  const handleOrderClick = (orders: any) => {
    setSelectedOrder(orders);
  };

  console.log(orders)

  return (
    <div>
      <h1>Lịch sử mua hàng</h1>

      <div className="order-list">
        <h2>Danh sách đơn hàng</h2>
        <ul>
          {orders?.map((order :any ) => (
            <li key={order.id} onClick={() => handleOrderClick(order)}>
              Đơn hàng #{order.id}
            </li>
          ))}
        </ul>
      </div>

      <div className="order-details">
        {selectedOrder ? (
          <div>
            <h2>Chi tiết đơn hàng #{selectedOrder.id}</h2>
            <p>Ngày đặt hàng: {selectedOrder.orderDate}</p>
            <p>Tổng số tiền: {selectedOrder.totalAmount}</p>
            <p>Địa chỉ giao hàng: {selectedOrder.address}</p>
            <p>Trạng thái: {selectedOrder.status}</p>

            <h3>Các mặt hàng trong đơn hàng:</h3>
            <ul>
              {selectedOrder.orderItems.map((item :any) => (
                <li key={item.id}>
                  {item.productName} - Số lượng: {item.quantity} - Giá:{" "}
                  {item.price}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Chọn một đơn hàng để xem chi tiết.</p>
        )}
      </div>
    </div>
  );
}

export default Order;
