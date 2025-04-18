import './globals.css'
import { Manrope } from 'next/font/google'

import type { Metadata, Viewport } from 'next'

import { ThemeProvider } from '@/components/theme-provider'
import { UserProvider } from '@/lib/auth'
import { getUser } from '@/lib/db/queries'

export const metadata: Metadata = {
  title: 'Next.js SaaS Starter',
  description: 'Get started quickly with Next.js, Postgres, and Stripe.',
}

export const viewport: Viewport = {
  maximumScale: 1,
}

const manrope = Manrope({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  let userPromise = getUser()

  return (
    <html
      lang='en'
      className={`bg-background text-foreground ${manrope.className}`}
      suppressHydrationWarning
    >
      <body className='bg-background min-h-[100dvh]'>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <UserProvider userPromise={userPromise}>{children}</UserProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
