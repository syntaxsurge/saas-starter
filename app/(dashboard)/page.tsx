'use client'

import Image from 'next/image'

import { ArrowRight, Database, CreditCard, Code2 } from 'lucide-react'

export default function HomePage() {
  return (
    <main>
      <section className='py-20'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          {/* 2-column layout for hero */}
          <div className='items-center lg:grid lg:grid-cols-2 lg:gap-8'>
            {/* Left: Heading and text */}
            <div className='sm:text-center md:mx-auto md:max-w-2xl lg:text-left'>
              <h1 className='text-foreground text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl'>
                Build Your SaaS
                <span className='block text-orange-500'>Faster Than Ever</span>
              </h1>
              <p className='text-muted-foreground mt-3 text-base sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
                Launch your SaaS product in record time with our powerful, ready-to-use template.
                Packed with modern technologies and essential integrations.
              </p>
              <div className='mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left'>
                <a
                  href='https://vercel.com/templates/next.js/next-js-saas-starter'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='border-border text-foreground hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center rounded-full border px-8 py-4 text-lg transition-colors'>
                    Deploy your own
                    <ArrowRight className='ml-2 h-5 w-5' />
                  </button>
                </a>
              </div>
            </div>

            <div className='mt-8 flex flex-col items-center gap-6 lg:mt-0'>
              <Image
                src='/images/hero-image.png'
                alt='Hero Image'
                width={400}
                height={250}
                className='border-border cursor-pointer rounded-md border shadow-sm'
              />
            </div>
          </div>
        </div>
      </section>

      <section className='bg-background w-full py-16'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='lg:grid lg:grid-cols-3 lg:gap-8'>
            <div className='mt-10 space-y-3 text-center lg:mt-0 lg:text-left'>
              <div className='inline-flex h-12 w-12 items-center justify-center rounded-md bg-orange-500 text-white'>
                <Code2 className='h-6 w-6' />
              </div>
              <h2 className='text-foreground text-lg font-medium'>Next.js and React</h2>
              <p className='text-muted-foreground mt-2 text-base'>
                Leverage the power of modern web technologies for optimal performance and developer
                experience.
              </p>
            </div>

            <div className='mt-10 space-y-3 text-center lg:mt-0 lg:text-left'>
              <div className='inline-flex h-12 w-12 items-center justify-center rounded-md bg-orange-500 text-white'>
                <Database className='h-6 w-6' />
              </div>
              <h2 className='text-foreground text-lg font-medium'>Postgres and Drizzle ORM</h2>
              <p className='text-muted-foreground mt-2 text-base'>
                Robust database solution with an intuitive ORM for efficient data management and
                scalability.
              </p>
            </div>

            <div className='mt-10 space-y-3 text-center lg:mt-0 lg:text-left'>
              <div className='inline-flex h-12 w-12 items-center justify-center rounded-md bg-orange-500 text-white'>
                <CreditCard className='h-6 w-6' />
              </div>
              <h2 className='text-foreground text-lg font-medium'>Stripe Integration</h2>
              <p className='text-muted-foreground mt-2 text-base'>
                Seamless payment processing and subscription management with industry-leading Stripe
                integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-background py-16'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='lg:grid lg:grid-cols-2 lg:items-center lg:gap-8'>
            <div>
              <h2 className='text-foreground text-3xl font-bold sm:text-4xl'>
                Ready to launch your SaaS?
              </h2>
              <p className='text-muted-foreground mt-3 max-w-3xl text-lg'>
                Our template provides everything you need to get your SaaS up and running quickly.
                Don't waste time on boilerplate - focus on what makes your product unique.
              </p>
            </div>
            <div className='mt-8 flex justify-center lg:mt-0 lg:justify-end'>
              <a
                href='https://github.com/nextjs/saas-starter'
                target='_blank'
                rel='noopener noreferrer'
              >
                <button className='border-border text-foreground hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center rounded-full border px-12 py-6 text-xl transition-colors'>
                  View the code
                  <ArrowRight className='ml-3 h-6 w-6' />
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
