import Form, { type FormProduct } from './components/Form'

export default function New({ product }: { product: FormProduct }) {
  return <Form product={product} />
}
