import useShopifyProducts from "../../hooks/products/useShopifyProducts"
import ShopifyCard from "./_components/ShopifyCard"

const Products = () => {
  const { products } = useShopifyProducts()
  return (
    <div className="w-full min-h-full h-fit flex flex-col justify-evenly ">
      <span>Product List : </span>
      <div className="flex flex-wrap justify-evenly gap-5">
        {products.map((product) => (
          <ShopifyCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Products
