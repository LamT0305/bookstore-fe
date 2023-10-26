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
} from "../slices/UserSlice";
import { useNavigate } from "react-router-dom";

const useUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, user } = useAppSelector((state: RootState) => state.user);
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

  const handleGetCartUser = async (page: number) => {
    dispatch(HANDLE_LOADING(true));
    try {
      const res = await axiosInstance.get(GET_API("",page).viewCartUser, {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      });

      if (res.status === 200) {
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
      const res = await axiosInstance.post(POST_API().addToCart, form);
      if (res.status === 200) {
        const product = {
          id: res.data.id,
          quantity: res.data.quantity,
          image: res.data.image,
        };
        dispatch(HANDLE_ADDPRODUCT(product));
        alert(res.data.message);
      }
      dispatch(HANDLE_LOADING(false));
    } catch (error: any) {
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

  const handleUpdateCartItems = async (form: any) => {
    dispatch(HANDLE_LOADING(true));
    try {
      const id = form.get("id");
      const res = await axiosInstance.delete(PUT_API(id).updateCartItems, form);
      if (res.status === 200) {
        dispatch(HANDLE_UPDATE_CART(form));
        alert("Deleted item successfully!");
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
  return {
    isLoading,
    user,
    handleUpdateUser,
    handleGetCartUser,
    handleAddToCart,
    handleRemoveFromCart,
    handleUpdateCartItems,
  };
};

export default useUser;
