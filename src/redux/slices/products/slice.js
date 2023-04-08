import { createSlice } from "@reduxjs/toolkit";
import { allProductsExtraAction } from "./extraActions";
import {
  REDUX_IDLE_STATUS,
  REDUX_LOADING_STATUS,
  REDUX_REJECTED_STATUS,
  REDUX_SUCCESS_STATUS,
} from "@constants/status";

const initialState = {
  statusRedux: REDUX_IDLE_STATUS,
  allProducts: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(allProductsExtraAction.pending, (state) => {
      state.statusRedux = REDUX_LOADING_STATUS;
    });

    builder.addCase(allProductsExtraAction.rejected, (state, action) => {
      state.statusRedux = REDUX_REJECTED_STATUS;
      state.allProducts = [];
    });

    builder.addCase(allProductsExtraAction.fulfilled, (state, action) => {
      state.statusRedux = REDUX_SUCCESS_STATUS;
      state.allProducts = action.payload;
    });
  },
});

export default productsSlice.reducer;
