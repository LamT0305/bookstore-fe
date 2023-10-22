import { useDispatch } from "react-redux";
import { useAppSelector } from "../store";
import { RootState } from "../store";
import axiosInstance from "../../utils/axios";
import { GET_API, POST_API, PUT_API } from "../../utils/api";
import {
  HANDLE_LOADING,
  HANDLE_GETCART,
  HANDLE_ADDPRODUCT,
} from "../slices/UserSlice";

const useUser = () => {
  const dispatch = useDispatch();
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

  const handleGetCartUser = async () => {
    dispatch(HANDLE_LOADING(true));
    try {
      const res = await axiosInstance.get(GET_API("").viewCartUser, {
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
          image: res.data.image
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

  return {
    isLoading,
    user,
    handleUpdateUser,
    handleGetCartUser,
    handleAddToCart
  };
};

export default useUser;
