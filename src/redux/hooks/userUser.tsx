import { useDispatch } from "react-redux";
import { useAppSelector } from "../store";
import { RootState } from "../store";
import axiosInstance from "../../utils/axios";
import { GET_API, POST_API, PUT_API } from "../../utils/api";
import { HANDLE_LOADING, HANDLE_UPDATEUSER } from "../slices/UserSlice";

const userUser = () => {
  const dispatch = useDispatch();
  const { isLoading, user } = useAppSelector((state: RootState) => state.user);

  const handleUpdateUser = async (form: any) => {
    dispatch(HANDLE_LOADING(true));
    try {
      const res = await axiosInstance.put(PUT_API("").updateUserInfo, form, {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
        },
      });

      if (res.status === 200) {
        window.location.reload();
        alert(res.data);
      }
    } catch (error: any) {
      dispatch(HANDLE_LOADING(false));
      alert("An error occurred");
    }
  };

  return {
    isLoading,
    user,
    handleUpdateUser
  };
};
