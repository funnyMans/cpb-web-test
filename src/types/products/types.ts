export interface IProduct {
  id: string
  title: string
  image: IProductImage
  images: IProductImage[]
  body_html: string
  vendor: string
  product_type: string
  created_at: Date
  handle: string
  updated_at: Date
  published_at: Date
  template_suffix: any
  published_scope: string
  tags: string
  status: string
  admin_graphql_api_id: string
  variants: IProductVariant[]
  options: any[]
}

interface IProductImage {
  id: number
  alt: string | null
  position: number
  product_id: number
  created_at: Date
  updated_at: Date
  admin_graphql_api_id: string
  width: number
  height: number
  src: string
  variant_ids: any[]
}

interface IProductVariant {
  id: number
  product_id: number
  title: string
  price: string
  sku: string
  position: number
  inventory_policy: string
  compare_at_price: any
  fulfillment_service: string
  inventory_management: any
  option1: string
  option2: any
  option3: any
  created_at: Date
  updated_at: Date
  taxable: true
  barcode: any
  grams: 0
  image_id: any
  weight: 0
  weight_unit: string
  inventory_item_id: number
  inventory_quantity: number
  old_inventory_quantity: number
  requires_shipping: boolean
  admin_graphql_api_id: string
}
