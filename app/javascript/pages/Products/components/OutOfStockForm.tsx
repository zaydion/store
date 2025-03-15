import { useForm } from '@inertiajs/react'

export default function OutOfStockForm({ productId }: { productId: number }) {
  const { data, post, processing, reset, setData } = useForm({
    subscriber: {
      email: '',
    },
  })

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ subscriber: { email: event.target.value } })
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    post(`/products/${productId}/subscribers`, {
      onSuccess: () => reset(),
    })
  }

  return (
    <div className="bg-white shadow-sm sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-base font-semibold text-gray-900">Out of stock</h3>
        <div className="mt-2 max-w-xl text-sm text-gray-500">
          <p>Email me when available.</p>
        </div>
        <form
          className="mt-5 sm:flex sm:items-center"
          acceptCharset="UTF-8"
          onSubmit={onSubmit}
        >
          <div className="w-full sm:max-w-xs">
            <input
              placeholder="you@example.com"
              aria-label="Email"
              required
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              type="email"
              name="subscriber.email"
              id="subscriber_email"
              onChange={onChange}
              value={data.subscriber.email}
              disabled={processing}
            />
          </div>
          <input
            type="submit"
            name="commit"
            value="Submit"
            className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:mt-0 sm:ml-3 sm:w-auto"
            disabled={processing}
          />
        </form>
      </div>
    </div>
  )
}
