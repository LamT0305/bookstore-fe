import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initState = {
  isLoading: false,
  user: {} as any,
  cart: [] as any,
};

const slice = createSlice({
  name: "user",
  initialState: initState,
  reducers: {
    HANDLE_LOADING: (state, action: PayloadAction<any>) => {
      state.isLoading = action.payload;
    },
    HANDLE_GETCART: (state, action: PayloadAction<any>) => {
      state.cart = action.payload;
    },
    HANDLE_ADDPRODUCT: (state, action: PayloadAction<any>) => {
      state.cart = state.cart.concat(action.payload);
    },
  },
});

const { reducer, actions } = slice;
export const { HANDLE_LOADING, HANDLE_GETCART, HANDLE_ADDPRODUCT } = actions;
export default reducer;
