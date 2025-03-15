import { Link, router, usePage } from '@inertiajs/react'
import { type PageProps } from '../../Layouts/AppLayout'
import OutOfStockForm from './components/OutOfStockForm'

type Product = {
  id: number
  name: string
  description: string
  inventory_count: number
  featured_image_url: string
  is_out_of_stock: boolean
  delete_url: string
}

export default function Show({ product }: { product: Product }) {
  const {
    current_user: { auth },
  } = usePage<PageProps>().props

  const isAuthenticated = !!auth?.user_id

  const confirmDelete = () => {
    if (confirm('Are you sure you want to delete this product?')) {
      router.delete(product.delete_url)
    }

    return false
  }

  return (
    <div className="pb-16 pt-6 sm:pb-24">
      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <ol role="list" className="flex items-center space-x-4">
          <li>
            <div className="flex items-center">
              <Link
                href="/products"
                className="mr-4 text-sm font-medium text-gray-900"
              >
                Products
              </Link>
              <svg
                viewBox="0 0 6 20"
                aria-hidden="true"
                className="h-5 w-auto text-gray-300"
              >
                <path
                  d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </li>

          <li className="text-sm">
            <a
              href="#"
              aria-current="page"
              className="font-medium text-gray-500 hover:text-gray-600"
            >
              {product.name}
            </a>
          </li>
          <li className="ml-auto">
            {isAuthenticated ? (
              <a
                className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                href={`/products/edit/${product.id}`}
              >
                Edit product
              </a>
            ) : null}
          </li>
        </ol>
      </nav>

      <div className="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-5 lg:col-start-8">
            <div className="flex justify-between">
              <h1 className="text-xl font-medium text-gray-900">
                {product.name}
              </h1>
              <p className="text-xl font-medium text-gray-900">$35</p>
            </div>
            {/* Reviews */}
            <div className="mt-4">
              <h2 className="sr-only">Reviews</h2>
              <div className="flex items-center">
                <p className="text-sm text-gray-700">
                  3.9
                  <span className="sr-only"> out of 5 stars</span>
                </p>
                <div className="ml-1 flex items-center">
                  {/* Active: "text-yellow-400", Inactive: "text-gray-200" */}
                  <svg
                    className="size-5 shrink-0 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg
                    className="size-5 shrink-0 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg
                    className="size-5 shrink-0 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg
                    className="size-5 shrink-0 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg
                    className="size-5 shrink-0 text-gray-200"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div aria-hidden="true" className="ml-4 text-sm text-gray-300">
                  ·
                </div>
                <div className="ml-4 flex">
                  <a
                    href="#"
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    See all 512 reviews
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Image gallery */}
          <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
            <h2 className="sr-only">Images</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
              {!!product.featured_image_url ? (
                <img
                  src={product.featured_image_url}
                  alt="Back of women&#039;s Basic Tee in black."
                  className="rounded-lg lg:col-span-2 lg:row-span-2"
                />
              ) : null}
              <img
                src="https://tailwindui.com/plus/img/ecommerce-images/product-page-01-product-shot-01.jpg"
                alt="Side profile of women&#039;s Basic Tee in black."
                className="hidden rounded-lg lg:block"
              />
              <img
                src="https://tailwindui.com/plus/img/ecommerce-images/product-page-01-product-shot-02.jpg"
                alt="Front of women&#039;s Basic Tee in black."
                className="hidden rounded-lg lg:block"
              />
            </div>
          </div>

          <div className="mt-8 lg:col-span-5">
            {product.is_out_of_stock ? (
              <OutOfStockForm productId={product.id} />
            ) : (
              <form>
                {/* Color picker */}
                <div>
                  <h2 className="text-sm font-medium text-gray-900">Color</h2>

                  <fieldset aria-label="Choose a color" className="mt-2">
                    <div className="flex items-center gap-x-3">
                      {/* Active and Checked: "ring ring-offset-1" */}
                      <label
                        aria-label="Black"
                        className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-900 focus:outline-none"
                      >
                        <input
                          type="radio"
                          name="color-choice"
                          value="Black"
                          className="sr-only"
                        />
                        <span
                          aria-hidden="true"
                          className="size-8 rounded-full border border-black/10 bg-gray-900"
                        ></span>
                      </label>
                      {/* Active and Checked: "ring ring-offset-1" */}
                      <label
                        aria-label="Heather Grey"
                        className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-400 focus:outline-none"
                      >
                        <input
                          type="radio"
                          name="color-choice"
                          value="Heather Grey"
                          className="sr-only"
                        />
                        <span
                          aria-hidden="true"
                          className="size-8 rounded-full border border-black/10 bg-gray-400"
                        ></span>
                      </label>
                    </div>
                  </fieldset>
                </div>

                {/* Size picker */}
                <div className="mt-8">
                  <div className="flex items-center justify-between">
                    <h2 className="text-sm font-medium text-gray-900">Size</h2>
                    <a
                      href="#"
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      See sizing chart
                    </a>
                  </div>

                  <fieldset aria-label="Choose a size" className="mt-2">
                    <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                      {/*
                        In Stock: "cursor-pointer", Out of Stock: "opacity-25 cursor-not-allowed"
                        Active: "ring-2 ring-indigo-500 ring-offset-2"
                        Checked: "border-transparent bg-indigo-600 text-white hover:bg-indigo-700", Not Checked: "border-gray-200 bg-white text-gray-900 hover:bg-gray-50"
                      */}
                      <label className="flex cursor-pointer items-center justify-center rounded-md border px-3 py-3 text-sm font-medium uppercase focus:outline-none sm:flex-1">
                        <input
                          type="radio"
                          name="size-choice"
                          value="XXS"
                          className="sr-only"
                        />
                        <span>XXS</span>
                      </label>
                      {/*
                        In Stock: "cursor-pointer", Out of Stock: "opacity-25 cursor-not-allowed"
                        Active: "ring-2 ring-indigo-500 ring-offset-2"
                        Checked: "border-transparent bg-indigo-600 text-white hover:bg-indigo-700", Not Checked: "border-gray-200 bg-white text-gray-900 hover:bg-gray-50"
                      */}
                      <label className="flex cursor-pointer items-center justify-center rounded-md border px-3 py-3 text-sm font-medium uppercase focus:outline-none sm:flex-1">
                        <input
                          type="radio"
                          name="size-choice"
                          value="XS"
                          className="sr-only"
                        />
                        <span>XS</span>
                      </label>
                      {/*
                        In Stock: "cursor-pointer", Out of Stock: "opacity-25 cursor-not-allowed"
                        Active: "ring-2 ring-indigo-500 ring-offset-2"
                        Checked: "border-transparent bg-indigo-600 text-white hover:bg-indigo-700", Not Checked: "border-gray-200 bg-white text-gray-900 hover:bg-gray-50"
                      */}
                      <label className="flex cursor-pointer items-center justify-center rounded-md border px-3 py-3 text-sm font-medium uppercase focus:outline-none sm:flex-1">
                        <input
                          type="radio"
                          name="size-choice"
                          value="S"
                          className="sr-only"
                        />
                        <span>S</span>
                      </label>
                      {/*
                        In Stock: "cursor-pointer", Out of Stock: "opacity-25 cursor-not-allowed"
                        Active: "ring-2 ring-indigo-500 ring-offset-2"
                        Checked: "border-transparent bg-indigo-600 text-white hover:bg-indigo-700", Not Checked: "border-gray-200 bg-white text-gray-900 hover:bg-gray-50"
                      */}
                      <label className="flex cursor-pointer items-center justify-center rounded-md border px-3 py-3 text-sm font-medium uppercase focus:outline-none sm:flex-1">
                        <input
                          type="radio"
                          name="size-choice"
                          value="M"
                          className="sr-only"
                        />
                        <span>M</span>
                      </label>
                      {/*
                        In Stock: "cursor-pointer", Out of Stock: "opacity-25 cursor-not-allowed"
                        Active: "ring-2 ring-indigo-500 ring-offset-2"
                        Checked: "border-transparent bg-indigo-600 text-white hover:bg-indigo-700", Not Checked: "border-gray-200 bg-white text-gray-900 hover:bg-gray-50"
                      */}
                      <label className="flex cursor-pointer items-center justify-center rounded-md border px-3 py-3 text-sm font-medium uppercase focus:outline-none sm:flex-1">
                        <input
                          type="radio"
                          name="size-choice"
                          value="L"
                          className="sr-only"
                        />
                        <span>L</span>
                      </label>
                      {/*
                        In Stock: "cursor-pointer", Out of Stock: "opacity-25 cursor-not-allowed"
                        Active: "ring-2 ring-indigo-500 ring-offset-2"
                        Checked: "border-transparent bg-indigo-600 text-white hover:bg-indigo-700", Not Checked: "border-gray-200 bg-white text-gray-900 hover:bg-gray-50"
                      */}
                      <label className="flex cursor-not-allowed items-center justify-center rounded-md border px-3 py-3 text-sm font-medium uppercase opacity-25 sm:flex-1">
                        <input
                          type="radio"
                          name="size-choice"
                          value="XL"
                          disabled
                          className="sr-only"
                        />
                        <span>XL</span>
                      </label>
                    </div>
                  </fieldset>
                </div>

                <button
                  type="submit"
                  className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add to cart
                </button>
              </form>
            )}

            {/* Product details */}
            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Description</h2>
              <div className="mt-4 space-y-4 text-sm/6 text-gray-500">
                {product.description}
              </div>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-8">
              <h2 className="text-sm font-medium text-gray-900">
                Fabric &amp; Care
              </h2>

              <div className="mt-4">
                <ul
                  role="list"
                  className="list-disc space-y-1 pl-5 text-sm/6 text-gray-500 marker:text-gray-300"
                >
                  <li className="pl-2">Only the best materials</li>
                  <li className="pl-2">Ethically and locally made</li>
                  <li className="pl-2">Pre-washed and pre-shrunk</li>
                  <li className="pl-2">
                    Machine wash cold with similar colors
                  </li>
                </ul>
              </div>
            </div>

            {/* Policies */}
            <section aria-labelledby="policies-heading" className="mt-10">
              <h2 id="policies-heading" className="sr-only">
                Our Policies
              </h2>

              <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
                  <dt>
                    <svg
                      className="mx-auto size-6 shrink-0 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64"
                      />
                    </svg>
                    <span className="mt-4 text-sm font-medium text-gray-900">
                      International delivery
                    </span>
                  </dt>
                  <dd className="mt-1 text-sm text-gray-500">
                    Get your order in 2 years
                  </dd>
                </div>
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
                  <dt>
                    <svg
                      className="mx-auto size-6 shrink-0 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    <span className="mt-4 text-sm font-medium text-gray-900">
                      Loyalty rewards
                    </span>
                  </dt>
                  <dd className="mt-1 text-sm text-gray-500">
                    Don&#039;t look at other tees
                  </dd>
                </div>
              </dl>
            </section>
          </div>
        </div>
      </div>

      {isAuthenticated ? (
        <div className="flex justify-center mt-8 mb-8">
          <button
            onClick={confirmDelete}
            className="block rounded-md bg-red-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            Delete Product
          </button>
        </div>
      ) : null}
    </div>
  )
}
