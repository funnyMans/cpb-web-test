import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <Link to={"products"}>
        <span className="font-bold text-2xl"> Go to products</span>
      </Link>
    </>
  )
}

export default Home
