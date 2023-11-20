import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../app/store"
import { IProduct } from "../../types/products/types"

export interface ProductsState {
  productList: IProduct[]
  status: "idle" | "loading" | "failed"
}

const initialState: ProductsState = {
  productList: [],
  status: "idle",
}

export const getProductsAsync = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch("http://localhost:3000/api/v1/products") // The value we return becomes the `fulfilled` action payload
    const data = await response.json()

    return data.results
  },
)

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductsAsync.pending, (state) => {
        state.status = "loading"
      })
      .addCase(getProductsAsync.fulfilled, (state, action) => {
        state.status = "idle"
        state.productList = action.payload
      })
      .addCase(getProductsAsync.rejected, (state) => {
        state.status = "failed"
      })
  },
})

export const {} = productsSlice.actions

export const selectProductsStatus = (state: RootState) => state.products.status
export const selectProductList = (state: RootState) =>
  state.products.productList

export default productsSlice.reducer
