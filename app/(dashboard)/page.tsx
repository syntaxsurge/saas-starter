"use client"

import Image from 'next/image'
import { ArrowRight, Database, CreditCard, Code2 } from "lucide-react";

export default function HomePage() {
  return (
    <main>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 2-column layout for hero */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            {/* Left: Heading and text */}
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:text-left">
              <h1 className="text-4xl font-bold text-foreground tracking-tight sm:text-5xl md:text-6xl">
                Build Your SaaS
                <span className="block text-orange-500">Faster Than Ever</span>
              </h1>
              <p className="mt-3 text-base text-muted-foreground sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Launch your SaaS product in record time with our powerful,
                ready-to-use template. Packed with modern technologies and
                essential integrations.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <a
                  href="https://vercel.com/templates/next.js/next-js-saas-starter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="rounded-full text-lg px-8 py-4 inline-flex items-center justify-center
                      border border-border text-foreground hover:bg-accent hover:text-accent-foreground
                      transition-colors"
                  >
                    Deploy your own
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </a>
              </div>
            </div>

            <div className="mt-8 lg:mt-0 flex flex-col items-center gap-6">
              <Image
                  src="/images/hero-image.png"
                  alt="Hero Image"
                  width={400}
                  height={250}
                  className="cursor-pointer rounded-md border border-border shadow-sm"
                />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div className="mt-10 lg:mt-0 space-y-3 text-center lg:text-left">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                <Code2 className="h-6 w-6" />
              </div>
              <h2 className="text-lg font-medium text-foreground">
                Next.js and React
              </h2>
              <p className="mt-2 text-base text-muted-foreground">
                Leverage the power of modern web technologies for optimal
                performance and developer experience.
              </p>
            </div>

            <div className="mt-10 lg:mt-0 space-y-3 text-center lg:text-left">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                <Database className="h-6 w-6" />
              </div>
              <h2 className="text-lg font-medium text-foreground">
                Postgres and Drizzle ORM
              </h2>
              <p className="mt-2 text-base text-muted-foreground">
                Robust database solution with an intuitive ORM for efficient
                data management and scalability.
              </p>
            </div>

            <div className="mt-10 lg:mt-0 space-y-3 text-center lg:text-left">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                <CreditCard className="h-6 w-6" />
              </div>
              <h2 className="text-lg font-medium text-foreground">
                Stripe Integration
              </h2>
              <p className="mt-2 text-base text-muted-foreground">
                Seamless payment processing and subscription management with
                industry-leading Stripe integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                Ready to launch your SaaS?
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-muted-foreground">
                Our template provides everything you need to get your SaaS up
                and running quickly. Don't waste time on boilerplate - focus on
                what makes your product unique.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 flex justify-center lg:justify-end">
              <a
                href="https://github.com/nextjs/saas-starter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="rounded-full text-xl px-12 py-6 inline-flex items-center justify-center
                    border border-border text-foreground hover:bg-accent hover:text-accent-foreground
                    transition-colors"
                >
                  View the code
                  <ArrowRight className="ml-3 h-6 w-6" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );  
}