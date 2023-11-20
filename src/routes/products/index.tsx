import { RouteObject } from "react-router-dom"
import Products from "../../pages/products"
import ShopifySingleProduct from "../../pages/products/single-product"

const productsRouter: RouteObject[] = [
  { element: <Products />, index: true },
  { path: "/products/:productId", element: <ShopifySingleProduct /> },
]

export default productsRouter
