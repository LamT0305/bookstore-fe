import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initState = {
  isLoading: false,
};

const slice = createSlice({
  name: "auth",
  initialState: initState,
  reducers: {
    HANDLE_LOADING(state, action: PayloadAction<any>) {
      state.isLoading = action.payload;
    },
  },
});

const { reducer, actions } = slice;
export const { HANDLE_LOADING } = actions;
export default reducer;
