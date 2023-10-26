import { useDispatch } from "react-redux";
import { useAppSelector } from "../store";
import { RootState } from "../store";
import axiosInstance from "../../utils/axios";
import { GET_API, POST_API, PUT_API, DELETE_API } from "../../utils/api";
import {
  HANDLE_LOADING,
  HANDLE_DELETEBOOK,
  HANDLE_SETBOOK,
  HANDLE_UPDATEBOOK,
  HANDLE_SETTOTAL,
  HANDLE_ADDBOOK,
  HANDLE_SEARCHBOOK,
  HANDLE_GETBOOK_BY_ID
} from "../slices/BookSlice";

const useBook = () => {
  const dispatch = useDispatch();
  const { isLoading, book, books } = useAppSelector((state: RootState) => state.book);

  const getAllBooks = async (page:number) => {
    dispatch(HANDLE_LOADING(true));
    try {
      const res = await axiosInstance.get(GET_API("", page).getAllBook);
      const books = res.data;
      if (res.status === 200) {
        dispatch(HANDLE_SETBOOK(books.books));
      }
    } catch (error: any) {
      dispatch(HANDLE_LOADING(false));
      alert("An error occurred");
    }
  };

  const handleGetBookByID = async (id: string) => {
    dispatch(HANDLE_LOADING(true));
    try {
      const res = await axiosInstance.get(GET_API(id,0).getBookById);

      if (res.status === 200) {
        dispatch(HANDLE_GETBOOK_BY_ID(res.data));
      }
    } catch (error: any) {
      dispatch(HANDLE_LOADING(false));
      alert("An error occurred");
    }
  };

  const handleSearchBook = async (form: any, page:number) => {
    dispatch(HANDLE_LOADING(true));
    try{
      
      const res = await axiosInstance.get(GET_API("",page).getBookByName, form)
      if (res.status === 200) {
        // dispatch(HANDLE_SEARCHBOOK)
        // window.location.reload();
        // alert(res.data);
        console.log(res.data);
      }
    } catch (error: any) {
      dispatch(HANDLE_LOADING(false));
      alert("An error occurred");
    }
  };

  const handleDeleteBook = async (id: string) => {
    dispatch(HANDLE_LOADING(true));
    try {
      const res = await axiosInstance.delete(DELETE_API(id).deleteBook, {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
        },
      });

      if (res.status === 200) {
        window.location.reload();
        alert("Are you sure you want to?");
        console.log(res);
      }else{
        alert("Failed to delete book");
      }
    } catch (error: any) {
      dispatch(HANDLE_LOADING(false));
      alert("An error occurred");
    }
  };

  const handleAddBook = async (form:any) => {
    dispatch(HANDLE_LOADING(true));
    try {
      const res = await axiosInstance.post(POST_API().createBook, form, {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
        },
      });

      if (res.status === 200) {
        window.location.reload();
        alert("Are you sure you want to?");
        console.log(res);
      }else{
        alert("Failed to delete book");
      }
    } catch (error: any) {
      dispatch(HANDLE_LOADING(false));
      alert("An error occurred");
    }
  }
  const handleUpdateBook = async (form: any) => {
    dispatch(HANDLE_LOADING(true));
    try {
      const res = await axiosInstance.put(PUT_API("").updateBook, form, {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
        },
      });
 
      if (res.status === 200) {
        dispatch(HANDLE_UPDATEBOOK(book));
        window.location.reload();
        alert("Rights updated successfully");
      }
    } catch (error: any) {
      dispatch(HANDLE_LOADING(false));
      alert("An error occurred");
    }
  };

  return {
    books,
    book,
    isLoading: isLoading,
    getAllBooks,
    handleGetBookByID,
    handleUpdateBook,
    handleDeleteBook,
    handleSearchBook,
    handleAddBook,
  };
};

export default useBook;
