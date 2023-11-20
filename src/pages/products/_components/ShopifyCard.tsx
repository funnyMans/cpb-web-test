import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react"
import { IProduct } from "../../../types/products/types"
import { useNavigate } from "react-router-dom"
import HTMLReactParser from "html-react-parser"
import { filterElements } from "../../../lib/helpers/filterImages"
import CanvasComponent from "./CanvasImage"

interface IProps {
  product: IProduct
}

const ShopifyCard = ({ product }: IProps) => {
  const { id, title, image, vendor, product_type } = product
  const navigate = useNavigate()

  const DANGEROUS_HTML = HTMLReactParser(product.body_html)
  const redirect = () => {
    navigate(id)
  }

  const filteredHTML = filterElements(DANGEROUS_HTML)

  return (
    <Card className="mt-6 w-96 justify-between">
      <CardHeader color="blue-gray" className="relative h-56 items-center">
        <CanvasComponent image={image.src} width={350} height={200} draggable />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography>{vendor}</Typography>
        <Typography>{product_type}</Typography>
        <div>{filteredHTML}</div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button onClick={redirect}>Discover</Button>
      </CardFooter>
    </Card>
  )
}

export default ShopifyCard
