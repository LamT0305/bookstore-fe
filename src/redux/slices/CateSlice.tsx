import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initState = {
  isLoading: false,
  cate: [] as any,
  totalPages: 0,
};

const slice = createSlice({
  name: "cate",
  initialState: initState,
  reducers: {
    HANDLE_LOADING(state, action: PayloadAction<any>) {
      state.isLoading = action.payload;
    },
    HANDLE_SETCATE(state, action: PayloadAction<any>) {
      state.cate = action.payload;
    },
    HANDLE_UPDATECATE(state, action: PayloadAction<any>) {
      state.cate = action.payload;
    },
    HANDLE_DELETECATE(state, action: PayloadAction<any>) {
      state.cate = action.payload;
    },
    HANDLE_SETTOTAL(state, action: PayloadAction<any>) {
      state.totalPages = action.payload;
    },
    HANDLE_SEARCH(state, action: PayloadAction<any>) {
      state.cate = action.payload;
    },
  }});

const { reducer, actions } = slice;
export const {
  HANDLE_LOADING,
  HANDLE_SETCATE,
  HANDLE_UPDATECATE,
  HANDLE_DELETECATE,
  HANDLE_SETTOTAL,
  HANDLE_SEARCH
} = actions;
export default reducer;
