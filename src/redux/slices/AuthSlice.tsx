import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initState = {
  isLoading: false,
  user: {} as any,
};

const slice = createSlice({
  name: "auth",
  initialState: initState,
  reducers: {
    HANDLE_LOADING(state, action: PayloadAction<any>) {
      state.isLoading = action.payload;
    },
    HANDLE_SETUSER(state, action: PayloadAction<any>) {
      state.user = action.payload;
    },
  },
});

const { reducer, actions } = slice;
export const { HANDLE_LOADING, HANDLE_SETUSER } = actions;
export default reducer;
