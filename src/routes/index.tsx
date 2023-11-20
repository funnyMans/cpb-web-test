import { RouteObject } from "react-router-dom"
import Home from "../pages/home"
import productsRouter from "./products"
import Error404 from "../pages/error404"

const routes: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/products", children: productsRouter },
  { path: "*", element: <Error404 /> },
]

export default routes
