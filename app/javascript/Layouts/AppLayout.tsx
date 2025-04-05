import React, { useEffect } from 'react'
import { Head, usePage } from '@inertiajs/react'
import AppNotice from '../Pages/components/AppNotice'

import { useState } from 'react'
import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

import DesktopSidebar from './components/DesktopSidebar'
import HeaderBar from './components/HeaderBar'
import MobileSidebar from './components/MobileSidebar'

type AuthType = {
  id: number
  user_id: number
  ip_address: string
  user_agent: string
  created_at: string
  updated_at: string
}
export type PageProps = {
  current_user: {
    auth: AuthType
  }
}

type PageUrl = {
  url: string
}

export const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'Team', href: '/team', icon: UsersIcon },
  { name: 'Products', href: '/products', icon: FolderIcon },
  { name: 'Calendar', href: '/calendar', icon: CalendarIcon },
  { name: 'Documents', href: '/documents', icon: DocumentDuplicateIcon },
  { name: 'Reports', href: '/reports', icon: ChartPieIcon },
]

export const teams = [
  { id: 1, name: 'Heroicons', href: '/', initial: 'H', current: false },
  { id: 2, name: 'Tailwind Labs', href: '/', initial: 'T', current: false },
  { id: 3, name: 'Workcation', href: '/', initial: 'W', current: false },
]

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function AppLayout({ children }: { children: React.ReactNode }) {
  const {
    current_user: { auth },
  } = usePage<PageProps>().props

  const isAuthenticated = !!auth?.user_id

  const currentPath = usePage<PageUrl>().url

  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    if (sidebarOpen) {
      setSidebarOpen(false)
    }
  }, [currentPath])

  return (
    <>
      <Head>
        <title>Store</title>
      </Head>

      <div>
        {/* MobileSidebar */}
        <MobileSidebar
          currentPath={currentPath}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <DesktopSidebar currentPath={currentPath} />
        {/* Main app container section */}
        <div className="lg:pl-72">
          {/* Header Nav with Search */}
          <HeaderBar
            isAuthenticated={isAuthenticated}
            setSidebarOpen={setSidebarOpen}
          />

          <AppNotice />
          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">{children}</div>
          </main>
        </div>
      </div>
    </>
  )
}

export default AppLayout
