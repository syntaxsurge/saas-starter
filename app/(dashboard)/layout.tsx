'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { use, useState } from 'react'

import { Home, LogOut, Menu, CircleIcon } from 'lucide-react'

import { signOut } from '@/app/(login)/actions'
import { ModeToggle } from '@/components/theme-toggle'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useUser } from '@/lib/auth'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { userPromise } = useUser()
  const user = use(userPromise)
  const router = useRouter()
  const pathname = usePathname()

  async function handleSignOut() {
    await signOut()
    router.refresh()
    router.push('/')
  }

  return (
    <header className='border-border bg-background/50 sticky top-0 z-20 border-b backdrop-blur-md'>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8'>
        <Link href='/' className='flex items-center space-x-2'>
          <CircleIcon className='h-6 w-6 text-orange-500' />
          <span className='text-foreground text-xl font-semibold'>ACME</span>
        </Link>
        <div className='hidden items-center space-x-4 lg:flex'>
          <Link
            href='/pricing'
            className={`hover:text-foreground text-sm font-medium transition-colors ${
              pathname === '/pricing' ? 'text-foreground' : 'text-muted-foreground'
            }`}
          >
            Pricing
          </Link>
          <ModeToggle />
          {user ? (
            <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <DropdownMenuTrigger>
                <Avatar className='size-9 cursor-pointer'>
                  <AvatarImage alt={user.name || ''} />
                  <AvatarFallback>
                    {user.email
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end' className='flex flex-col gap-1'>
                <DropdownMenuItem className='cursor-pointer'>
                  <Link href='/dashboard' className='flex w-full items-center'>
                    <Home className='mr-2 h-4 w-4' />
                    <span>Dashboard</span>
                  </Link>
                </DropdownMenuItem>
                <form action={handleSignOut} className='w-full'>
                  <button type='submit' className='flex w-full'>
                    <DropdownMenuItem className='w-full flex-1 cursor-pointer'>
                      <LogOut className='mr-2 h-4 w-4' />
                      <span>Sign out</span>
                    </DropdownMenuItem>
                  </button>
                </form>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className='flex items-center space-x-2'>
              <Button asChild variant='ghost' className='rounded-full px-4 py-2 text-sm'>
                <Link href='/sign-in'>Sign In</Link>
              </Button>
              <Button asChild className='rounded-full px-4 py-2 text-sm'>
                <Link href='/sign-up'>Sign Up</Link>
              </Button>
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        <div className='flex items-center space-x-2 lg:hidden'>
          <ModeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='text-foreground hover:text-foreground/80 focus:outline-none'
          >
            <Menu className='h-6 w-6' />
            <span className='sr-only'>Toggle menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Nav - Slide Down */}
      {isMenuOpen && (
        <div className='border-border bg-background/90 border-t shadow-sm lg:hidden'>
          <nav className='flex flex-col space-y-3 px-4 py-4'>
            <Link
              href='/pricing'
              className={`hover:text-foreground text-sm font-medium transition-colors ${
                pathname === '/pricing' ? 'text-foreground' : 'text-muted-foreground'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            {user ? (
              <>
                <Link
                  href='/dashboard'
                  className='hover:text-foreground text-muted-foreground text-sm font-medium transition-colors'
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <form
                  action={async () => {
                    await handleSignOut()
                    setIsMenuOpen(false)
                  }}
                >
                  <button className='hover:text-foreground text-muted-foreground text-left text-sm font-medium transition-colors'>
                    Sign out
                  </button>
                </form>
              </>
            ) : (
              <div className='flex flex-col space-y-2'>
                <Link
                  href='/sign-in'
                  onClick={() => setIsMenuOpen(false)}
                  className='w-full text-center'
                >
                  <Button variant='ghost' className='w-full rounded-full text-sm'>
                    Sign In
                  </Button>
                </Link>
                <Link
                  href='/sign-up'
                  onClick={() => setIsMenuOpen(false)}
                  className='w-full text-center'
                >
                  <Button className='w-full rounded-full text-sm'>Sign Up</Button>
                </Link>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className='flex min-h-screen flex-col'>
      <Header />
      {children}
    </section>
  )
}
