import Form, { type FormProduct } from './components/Form'

export default function Edit({ product }: { product: FormProduct }) {
  return <Form product={product} />
}
