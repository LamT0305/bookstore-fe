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
    HANDLE_REMOVE_FROM_CART: (state, action: PayloadAction<any>) => {
      state.cart = state.cart.filter((e: any) => e.id !== action.payload);
    },
    HANDLE_UPDATE_CART: (state, action: PayloadAction<any>) => {
      const form = action.payload;
      if (form) {
        const id = form.get("id");
        const quantity = form.get("quantity");
        const updateCart = state.cart.map((e: any) =>
          e.id === id ? { ...e, quantity } : e
        );
        state.cart = updateCart;
      }
    },
  },
});

const { reducer, actions } = slice;
export const {
  HANDLE_LOADING,
  HANDLE_GETCART,
  HANDLE_ADDPRODUCT,
  HANDLE_REMOVE_FROM_CART,
  HANDLE_UPDATE_CART,
} = actions;
export default reducer;
