import { createInertiaApp } from '@inertiajs/react'
import { ReactNode } from 'react'
import { createRoot } from 'react-dom/client'

import AppLayout from '../Layouts/AppLayout'
import PublicLayout from '../Layouts/PublicLayout'

// Temporary type definition, until @inertiajs/react provides one
type ResolvedComponent = {
  default: ReactNode
  layout?: (page: ReactNode) => ReactNode
}

createInertiaApp({
  // Set default page title
  // see https://inertia-rails.dev/guide/title-and-meta
  //
  // title: title => title ? `${title} - App` : 'App',

  // Disable progress bar
  //
  // see https://inertia-rails.dev/guide/progress-indicators
  // progress: false,

  resolve: (name) => {
    const pages = import.meta.glob<ResolvedComponent>('../pages/**/*.tsx', {
      eager: true,
    })
    const page = pages[`../pages/${name}.tsx`]
    if (!page) {
      console.error(`Missing Inertia page component: '${name}.tsx'`)
      return null
    }

    // @ts-expect-error
    page.default!.layout = name.startsWith('Public/')
      ? (page: string) => <PublicLayout children={page} />
      : (page: string) => <AppLayout children={page} />
    return page
  },

  setup({ el, App, props }) {
    if (el) {
      createRoot(el).render(<App {...props} />)
    } else {
      console.error(
        'Missing root element.\n\n' +
          'If you see this error, it probably means you load Inertia.js on non-Inertia pages.\n' +
          'Consider moving <%= vite_typescript_tag "inertia" %> to the Inertia-specific layout instead.'
      )
    }
  },
})
