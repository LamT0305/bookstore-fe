import { useDispatch } from "react-redux";
import { useAppSelector } from "../store";
import { RootState } from "../store";
import { HANDLE_LOADING } from "../slices/AuthSlice";
import axiosInstance from "../../utils/axios";
import { POST_API } from "../../utils/api";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading } = useAppSelector((state: RootState) => state.auth);
  const handleLogin = async (form: any) => {
    dispatch(HANDLE_LOADING(true));
    try {
      const res = await axiosInstance.post(POST_API().login, form);
      if (res.status === 200) {
        alert("Successfully logged in");
        sessionStorage.setItem("accessToken", res.data);
        sessionStorage.setItem("isAuthenticated", "1"); // 1 == true
        window.location.reload();
        navigate("/");
      }
      dispatch(HANDLE_LOADING(false));
    } catch (error: any) {
      dispatch(HANDLE_LOADING(false));
      alert("An error occurred");
    }
  };

  const handleRegister = async (form: any) => {
    dispatch(HANDLE_LOADING(true));
    try {
      const res = await axiosInstance.post(POST_API().register, form);
      if (res.status === 200) {
        alert("Successfully logged in");
      }
      dispatch(HANDLE_LOADING(false));
    } catch (error: any) {
      dispatch(HANDLE_LOADING(false));
      alert("An error occurred");
    }
  };

  const handleLogOut = () => {
    sessionStorage.clear();
  };
  return {
    isLoading,
    handleLogin,
    handleRegister,
    handleLogOut,
  };
};

export default useAuth;
