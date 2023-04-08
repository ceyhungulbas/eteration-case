import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleApiCall } from "@utils/redux";
import { allProducts_API } from "@axios/productsAPI";

export const allProductsExtraAction = createAsyncThunk(
  "products/allProducts",
  async (_undefined, { rejectWithValue }) =>
    handleApiCall(() => allProducts_API(), rejectWithValue)
);
