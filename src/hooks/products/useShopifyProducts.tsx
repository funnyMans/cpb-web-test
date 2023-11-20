import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks"
import {
  getProductsAsync,
  selectProductList,
} from "../../redux/slice/productsSlice"

const useShopifyProducts = () => {
  const dispatch = useAppDispatch()
  const products = useAppSelector(selectProductList)

  useEffect(() => {
    if (!products.length) {
      dispatch(getProductsAsync())
    }
  }, [dispatch, products.length])

  return {
    products,
  }
}

export default useShopifyProducts
