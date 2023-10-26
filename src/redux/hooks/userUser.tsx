import { useDispatch } from "react-redux";
import { useAppSelector } from "../store";
import { RootState } from "../store";
import axiosInstance from "../../utils/axios";
import { DELETE_API, GET_API, POST_API, PUT_API } from "../../utils/api";
import {
  HANDLE_LOADING,
  HANDLE_GETCART,
  HANDLE_ADDPRODUCT,
  HANDLE_REMOVE_FROM_CART,
  HANDLE_UPDATE_CART,
  HANDLE_GET_ORDERS,
} from "../slices/UserSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, user, cart, orders } = useAppSelector(
    (state: RootState) => state.user
  );
  const accessToken = sessionStorage.getItem("accessToken");

  const handleUpdateUser = async (form: FormData) => {
    dispatch(HANDLE_LOADING(true));
    try {
      const res = await axiosInstance.put(PUT_API("").updateUserInfo, form, {
        headers: {
          Authorization: "Bearer " + accessToken,
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.status === 200) {
        alert(res.data);
      }
      dispatch(HANDLE_LOADING(false));
    } catch (error: any) {
      dispatch(HANDLE_LOADING(false));
      alert("An error occurred");
    }
  };

  const handleGetCartUser = async () => {
    dispatch(HANDLE_LOADING(true));
    try {
      const res = await axiosInstance.get(GET_API("", 0).viewCartUser, {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      });

      if (res.status === 200) {
        console.log(res.data);
        dispatch(HANDLE_GETCART(res.data));
      }
      dispatch(HANDLE_LOADING(false));
    } catch (error: any) {
      dispatch(HANDLE_LOADING(false));
      alert("An error occurred");
    }
  };

  const handleAddToCart = async (form: any) => {
    dispatch(HANDLE_LOADING(true));
    try {
      const res = await axios.post(
        "https://bookstore-api-demo.azurewebsites.net/api/v1/customer/addtocart",
        form,
        {
          headers: {
            Authorization: "Bearer " + accessToken,
          },
        }
      );
      if (res.status === 200) {
        alert("Added to cart successfully");
      }
      dispatch(HANDLE_LOADING(false));
    } catch (e) {
      console.log(e);
      dispatch(HANDLE_LOADING(false));
      alert("An error occurred");
    }
  };

  const handleRemoveFromCart = async (id: string) => {
    dispatch(HANDLE_LOADING(true));
    try {
      const res = await axiosInstance.delete(DELETE_API(id).deleteItemInCart, {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      });
      if (res.status === 200) {
        alert("Deleted item successfully!");
        dispatch(HANDLE_REMOVE_FROM_CART(id));
      } else if (res.status === 401) {
        alert("Session expired, please login again");
        window.location.reload();
        navigate("/login");
      }
    } catch (error: any) {
      dispatch(HANDLE_LOADING(false));
      alert("An error occurred");
    }
  };

  const handleUpdateCartItems = async (id: any, form: any) => {
    dispatch(HANDLE_LOADING(true));
    try {
      const res = await axiosInstance.delete(PUT_API(id).updateCartItems, form);
      if (
        sessionStorage.getItem("isAuthenticated") === "1" &&
        res.status === 401
      ) {
        alert("Session expired, please login again");
        window.location.reload();
        navigate("/login");
      } else if (res.status === 200) {
        // const form = new FormData();
        // form.append("id", id)
        // form.append("quantity", );
        // dispatch(HANDLE_UPDATE_CART());
      }
    } catch (error: any) {
      dispatch(HANDLE_LOADING(false));
      alert("An error occurred");
    }
  };
  const handleCreateOrder = async () => {
    try {
      const res = await axiosInstance.post(POST_API().createOrder, "", {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      });

      if (res.status === 200) {
        alert("Created Order successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetOrderHistory = async () => {
    try {
      const res = await axiosInstance.get(GET_API("", 0).viewOrderHistory, {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      });

      if (res.status === 200) {
        dispatch(HANDLE_GET_ORDERS(res.data));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return {
    cart,
    orders,
    isLoading,
    user,
    handleUpdateUser,
    handleGetCartUser,
    handleAddToCart,
    handleRemoveFromCart,
    handleUpdateCartItems,
    handleCreateOrder,
    handleGetOrderHistory
  };
};

export default useUser;
