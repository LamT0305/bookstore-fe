import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initState = {
  isLoading: false,
  book: [] as any,
  totalPages: 0,
};

const slice = createSlice({
  name: "book",
  initialState: initState,
  reducers: {
    HANDLE_LOADING(state, action: PayloadAction<any>) {
      state.isLoading = action.payload;
    },
    HANDLE_SETBOOK(state, action: PayloadAction<any>) {
      state.book = action.payload;
    },
    HANDLE_UPDATEBOOK(state, action: PayloadAction<any>) {
      state.book = action.payload;
    },
    HANDLE_DELETEBOOK(state, action: PayloadAction<any>) {
      state.book = action.payload;
    },
    HANDLE_SETTOTAL(state, action: PayloadAction<any>) {
        state.totalPages = action.payload;
    },
    HANDLE_ADDBOOK(state, action: PayloadAction<any>) {
      state.book = action.payload;
    },
    HANDLE_SEARCHBOOK(state, action: PayloadAction<any>) {
      state.book = action.payload;
  }
  },
});

const { reducer, actions } = slice;
export const {
  HANDLE_LOADING,
  HANDLE_SETBOOK,
  HANDLE_UPDATEBOOK,
  HANDLE_DELETEBOOK,
  HANDLE_SETTOTAL,
  HANDLE_SEARCHBOOK,
  HANDLE_ADDBOOK
} = actions;
export default reducer;
