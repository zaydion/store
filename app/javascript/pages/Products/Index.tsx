import ProductsTable from './components/ProductsTable'

export default function Index({
  products,
}: {
  products: {
    id: number
    name: string
    description: string
    inventory_count: number
    show_url: string
  }[]
}) {
  return <ProductsTable products={products} />
}
