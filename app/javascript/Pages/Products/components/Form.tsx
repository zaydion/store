import { Link, useForm, usePage } from '@inertiajs/react'

export type FormProduct = {
  id: number | null
  name: string | ''
  description: string | ''
  inventory_count: string
  featured_image_url: string | ''
  is_out_of_stock: boolean | false
  delete_url: string | ''
}

function Form({ product }: { product: FormProduct }) {
  const { errors } = usePage().props
  const { data, setData, post, put } = useForm({
    product: {
      name: '',
      description: '',
      inventory_count: '',
      featured_image: null,
    },
  })

  const isEditing = !!product?.id

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isEditing) {
      put(`/products/${product.id}`)
    } else {
      post('/products')
    }
  }

  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      {!!errors ? (
        <div className="rounded-md bg-red-50 p-4 mb-8">
          <div className="flex">
            <div className="shrink-0">
              <svg
                className="size-5 text-red-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">
                {Object.keys(errors).length <= 1 ? 'Error' : 'Errors'} with your
                submission
              </h3>
              <div className="mt-2 text-sm text-red-700">
                <ul role="list" className="list-disc space-y-1 pl-5">
                  {Object.entries(errors).map(([key, values]) =>
                    // @ts-expect-error
                    values.map((value) => (
                      <li key={key}>
                        {key} {value}
                      </li>
                    ))
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <form onSubmit={onSubmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base/7 font-semibold text-gray-900">
              Product: {product.name}
            </h2>
            <p className="mt-1 text-sm/6 text-gray-600">
              This information will be displayed publicly so be careful what you
              share.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label className="block text-sm/6 font-medium text-gray-900">
                  Name
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                      placeholder="T-Shirt"
                      value={data.product.name}
                      onChange={(e) =>
                        setData('product', {
                          ...data.product,
                          name: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label className="block text-sm/6 font-medium text-gray-900">
                  Description
                </label>
                <p className="mt-3 text-sm/6 text-gray-600">
                  Write a few sentences about the product.
                </p>
                {/* TODO: Implement rich text */}
                {/* <div className="mt-2">
              <%= form.rich_text_area :description, class: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6", id: "description", rows: "3" %>
            </div> */}
              </div>

              <div className="col-span-full">
                <label className="block text-sm/6 font-medium text-gray-900">
                  Inventory Count
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="inventory_count"
                    id="inventory_count"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    placeholder="10"
                    value={data.product.inventory_count}
                    onChange={(e) =>
                      setData('product', {
                        ...data.product,
                        inventory_count: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <div className="col-span-full" data-controller="file-previews">
                <p className="block text-sm/6 font-medium text-gray-900">
                  Featured Image
                </p>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  {/* TODO: implement file upload */}
                  {/* <div className="text-center">
                <% if @product.featured_image.attached? %>
                  <%= image_tag @product.featured_image.variant(resize_to_limit: [400, 400]), class: "rounded-lg", data: { file_previews_target: "featuredImage" } %>
                <% else %>
                  <%= image_tag "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'%3E%3Cpath fillRule='evenodd' d='M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z' clipRule='evenodd'/%3E%3C/svg%3E", class: "rounded-lg", data: { file_previews_target: "featuredImage" }, class: "mx-auto size-12 text-gray-300" %>
                <% end %>
                <div className="mt-4 flex text-sm/6 text-gray-600">
                  <label htmlFor="product_featured_image" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500">
                    <span>Upload a file</span>
                    <%= form.file_field :featured_image,
                                        accept: "image/*",
                                        class: "sr-only",
                                        multiple: false,
                                        data: {
                                          file_previews_target: "featuredImageInput",
                                          action: "change->file-previews#preview"
                                        } %>
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
              </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <Link
            href={isEditing ? `/products/${product.id}` : `/products`}
            className="text-sm/6 font-semibold text-gray-900"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form
