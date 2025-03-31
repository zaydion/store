import { Head } from '@inertiajs/react'
import AppNotice from '../Pages/components/AppNotice'

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <main>
        <AppNotice />
        <article>{children}</article>
      </main>
    </>
  )
}
