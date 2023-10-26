import { useDispatch } from "react-redux";
import { useAppSelector } from "../store";
import { RootState } from "../store";
import { HANDLE_LOADING, HANDLE_SETUSER } from "../slices/AuthSlice";
import axiosInstance from "../../utils/axios";
import { GET_API, POST_API } from "../../utils/api";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, user } = useAppSelector((state: RootState) => state.auth);
  const handleLogin = async (form: any) => {
    dispatch(HANDLE_LOADING(true));
    try {
      const res = await axiosInstance.post(POST_API().login, form);
      if (res.status === 200) {
        alert("Successfully logged in");
        sessionStorage.setItem("accessToken", res.data);
        sessionStorage.setItem("isAuthenticated", "1"); // 1 == true
        navigate("/");
        window.location.reload();
      }
      dispatch(HANDLE_LOADING(false));
    } catch (error: any) {
      dispatch(HANDLE_LOADING(false));
      alert("An error occurred");
      console.log(error)
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

  const handleGetCurrentUser = async (page:number) => {
    dispatch(HANDLE_LOADING(true));
    try {
      const accessToken = sessionStorage.getItem("accessToken");
      const res = await axiosInstance.get(GET_API("",page).getCurrentUser, {
        headers: {
          Authorization: "bearer " + accessToken,
        },
      });
      if (res.status === 200) {
        dispatch(HANDLE_SETUSER(res.data));
      }
    } catch (error) {
      dispatch(HANDLE_LOADING(false));
      alert("Token expired, please login again!");
      navigate("/log-in")
      sessionStorage.clear();
      window.location.reload();
    }
  };


  const handleLogOut = () => {
    sessionStorage.clear();
    navigate("/");
    window.location.reload();
  };
  return {
    user,
    isLoading,
    handleLogin,
    handleRegister,
    handleLogOut,
    handleGetCurrentUser,
  };
};

export default useAuth;
