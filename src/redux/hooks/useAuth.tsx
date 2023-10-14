import { useDispatch } from "react-redux";
import { useAppSelector } from "../store";
import { RootState } from "../store";
import { HANDLE_LOADING } from "../slices/AuthSlice";

const useAuth = () => {
  const dispatch = useDispatch();
  const { isLoading } = useAppSelector((state: RootState) => state.auth);
  const handleLogin = async (form: any) => {
    dispatch(HANDLE_LOADING(true));
    try {
        
    } catch (error:any) {
        dispatch(HANDLE_LOADING(false));
        alert("An error occurred")
    }
  };
};
