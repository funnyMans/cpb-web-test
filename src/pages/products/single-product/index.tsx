import { useMemo } from "react"
import { useParams } from "react-router-dom"

import useShopifyProducts from "../../../hooks/products/useShopifyProducts"
import ProductInfo from "./_components/ProductInfo"
import Slider from "./_components/Slider"

const ShopifySingleProduct = () => {
  const { productId } = useParams()
  const { products } = useShopifyProducts()

  const product = useMemo(
    () => products.find((product) => product.id === productId) || products[0],
    [productId, products],
  )

  return (
    product && (
      <div className=" min-h-full h-fit w-full flex justify-center items-center">
        <div
          className={
            "w-full h-10/12 md:px-6 px-4 py-12  flex justify-center  bg-gray-800 "
          }
        >
          <div className="xl:container 2xl:mx-auto  flex w-96 md:w-10/12 xl:w-8/12 2xl:w-7/12 item-start flex-col lg:flex-row   lg:space-x-8 py-12 md:py-16 lg:py-12 px-4 md:px-8 lg:px-24 bg-white">
            <Slider product={product} />
            <ProductInfo />
          </div>
        </div>
      </div>
    )
  )
}

export default ShopifySingleProduct
