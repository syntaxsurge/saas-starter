'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

import { Users, Settings, Shield, Activity, Menu } from 'lucide-react'

import { Button } from '@/components/ui/button'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const navItems = [
    { href: '/dashboard', icon: Users, label: 'Team' },
    { href: '/dashboard/general', icon: Settings, label: 'General' },
    { href: '/dashboard/activity', icon: Activity, label: 'Activity' },
    { href: '/dashboard/security', icon: Shield, label: 'Security' },
  ]

  return (
    <div className='mx-auto flex min-h-[calc(100dvh-68px)] w-full max-w-7xl'>
      {/* Sidebar (desktop) */}
      <aside
        className={`bg-background border-border top-[68px] hidden h-[calc(100dvh-68px)] w-64 flex-col overflow-y-auto border-r lg:sticky lg:flex`}
      >
        <nav className='p-4'>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} passHref>
              <Button
                variant={pathname === item.href ? 'secondary' : 'ghost'}
                className={`my-1 w-full justify-start shadow-none ${
                  pathname === item.href ? 'bg-secondary text-secondary-foreground' : ''
                }`}
              >
                <item.icon className='mr-2 h-4 w-4' />
                {item.label}
              </Button>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Mobile layout wrapper */}
      <div className='flex flex-1 flex-col'>
        {/* Mobile header */}
        <div
          className={`bg-background border-border sticky top-[68px] z-10 flex items-center justify-between border-b p-4 lg:hidden`}
        >
          <div className='flex items-center'>
            <span className='font-medium'>Settings</span>
          </div>
          <Button
            className='-mr-3'
            variant='ghost'
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Menu className='h-6 w-6' />
            <span className='sr-only'>Toggle sidebar</span>
          </Button>
        </div>

        {/* Slide-out sidebar for mobile */}
        {isSidebarOpen && (
          <aside
            className={`bg-background border-border fixed top-[68px] left-0 z-40 h-[calc(100dvh-68px)] w-64 flex-col overflow-y-auto border-r lg:hidden`}
          >
            <nav className='p-4'>
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} passHref>
                  <Button
                    variant={pathname === item.href ? 'secondary' : 'ghost'}
                    className={`my-1 w-full justify-start shadow-none ${
                      pathname === item.href ? 'bg-secondary text-secondary-foreground' : ''
                    }`}
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <item.icon className='mr-2 h-4 w-4' />
                    {item.label}
                  </Button>
                </Link>
              ))}
            </nav>
          </aside>
        )}

        {/* Main content */}
        <main className='flex-1 overflow-y-auto p-4'>{children}</main>
      </div>
    </div>
  )
}
