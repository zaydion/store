import { usePage } from '@inertiajs/react'

type PageProps = {
  flash: {
    notice: string
    alert: string
  }
}

function AppNotice() {
  const { flash } = usePage<PageProps>().props

  if (!flash.notice && !flash.alert) {
    return null
  }

  return (
    <div
      className={`notice rounded-md bg-${
        flash?.notice ? 'green' : 'red'
      }-50 p-4`}
    >
      <div className="flex items-center">
        <div className="shrink-0">
          <svg
            className={`size-5 text-${flash?.notice ? 'green' : 'red'}-400`}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="ml-3">
          <div
            className={`text-sm text-${flash?.notice ? 'green' : 'red'}-700`}
          >
            {flash.notice || flash.alert}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppNotice
