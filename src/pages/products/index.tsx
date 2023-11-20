import useShopifyProducts from "../../hooks/products/useShopifyProducts"
import ShopifyCard from "./_components/ShopifyCard"

const Products = () => {
  const { products } = useShopifyProducts()
  return (
    <div className="w-full min-h-full h-fit flex flex-col justify-evenly py-10">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Shopify не дружит с Аpollo Client,
      </h1>
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        А ClientID и ApiKey у меня нет, есть только AccessToken
      </h1>
      <h5 className="text-lg font-bold text-cyan-700 sm:text-xl">
        поэтому пришлось откопать другую либу
      </h5>
      <p className="my-4 text-4xl text-green-500 font-extrabold">
        shopify-api-node
      </p>
      <div className="flex flex-wrap justify-evenly gap-5">
        {products.map((product) => (
          <ShopifyCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Products
