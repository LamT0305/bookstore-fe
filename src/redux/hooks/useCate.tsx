import { useDispatch } from "react-redux";
import { useAppSelector } from "../store";
import { RootState } from "../store";
import axiosInstance from "../../utils/axios";
import { GET_API, POST_API, PUT_API, DELETE_API } from "../../utils/api";
import {
  HANDLE_LOADING,
  HANDLE_DELETECATE,
  HANDLE_SETCATE,
  HANDLE_UPDATECATE,
  HANDLE_SETTOTAL,
  HANDLE_SEARCH
} from "../slices/CateSlice";
import Category from "../../components/categories/Category";


const useCate = () => {
  const dispatch = useDispatch();
  const { isLoading, cate } = useAppSelector((state: RootState) => state.cate);

  const getAllCates = async () => {
    dispatch(HANDLE_LOADING(true));
    try {
      const res = await axiosInstance.get(GET_API("").getAllCategory)

      if (res.status === 200) {
        const cates = res.data;
        dispatch(HANDLE_SETCATE(cates));
        // window.location.reload();
        // alert(res.data);
      }
    } catch (error: any) {
      dispatch(HANDLE_LOADING(false));
      alert("An error occurred");
    }
  };

  const handleGetCateByID = async (id: string) => {
    dispatch(HANDLE_LOADING(true));
    try {
      const res = await axiosInstance.get(GET_API(id).getCategoryById, {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
        },
      });

      if (res.status === 200) {
        dispatch(HANDLE_SEARCH);
        window.location.reload();
        alert(res.data);
      }
    } catch (error: any) {
      dispatch(HANDLE_LOADING(false));
      alert("An error occurred");
    }
  };

  const handleDeleteCate = async (id: string) => {
    dispatch(HANDLE_LOADING(true));
    try {
      const res = await axiosInstance.delete(DELETE_API(id).deleteCategory, {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
        },
      });

      if (res.status === 200) {
        window.location.reload();
        alert(res.data);
        console.log(res);
      }
    } catch (error: any) {
      dispatch(HANDLE_LOADING(false));
      alert("An error occurred");
    }
  };

  const handleUpdateCate = async (form: any) => {
    dispatch(HANDLE_LOADING(true));
    try {
      const res = await axiosInstance.put(PUT_API("").updateCategory, form, {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
        },
      });
      if (res.status === 200) {
        dispatch(HANDLE_UPDATECATE(Category));
        window.location.reload();
        alert("Rights updated successfully");
      }
    } catch (error: any) {
      dispatch(HANDLE_LOADING(false));
      alert("An error occurred");
    }
  };

  return {
    cate,
    isLoading,
    getAllCates,
    handleGetCateByID,
    handleUpdateCate,
    handleDeleteCate,
  };
};

export default useCate;
