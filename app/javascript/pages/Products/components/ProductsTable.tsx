import { Link } from '@inertiajs/react'

export default function ProductsTable({
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
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold text-gray-900">Products</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the products in your account including their name.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <a
            href="/products/new"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add product
          </a>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Role
                  </th>
                  <th scope="col" className="relative py-3.5 pr-4 pl-3 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {products.map((product) => (
                  <tr key={product.name}>
                    <td className="py-5 pr-3 pl-4 text-sm whitespace-nowrap sm:pl-0">
                      <Link
                        href={product.show_url}
                        className="flex items-center"
                      >
                        <div className="size-11 shrink-0">
                          <img
                            className="size-11 rounded-full"
                            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="font-medium text-gray-900">
                            {product.name}
                          </div>
                          <div className="mt-1 text-gray-500">
                            {product.description}
                          </div>
                        </div>
                      </Link>
                    </td>
                    <td className="px-3 py-5 text-sm whitespace-nowrap text-gray-500">
                      <div className="text-gray-900">Front-end Developer</div>
                      <div className="mt-1 text-gray-500">Optimization</div>
                    </td>
                    <td className="px-3 py-5 text-sm whitespace-nowrap text-gray-500">
                      <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset">
                        Active
                      </span>
                    </td>
                    <td className="px-3 py-5 text-sm whitespace-nowrap text-gray-500">
                      Member
                    </td>
                    <td className="relative py-5 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-0">
                      <a
                        href={`/products/${product.id}/edit`}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Edit<span className="sr-only">, {product.name}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
