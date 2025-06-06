'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useActionState } from 'react'

import { CircleIcon, Loader2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ActionState } from '@/lib/auth/middleware'

import { signIn, signUp } from './actions'

export function Login({ mode = 'signin' }: { mode?: 'signin' | 'signup' }) {
  const searchParams = useSearchParams()
  const redirect = searchParams.get('redirect')
  const priceId = searchParams.get('priceId')
  const inviteId = searchParams.get('inviteId')
  const [state, formAction, pending] = useActionState<ActionState, FormData>(
    mode === 'signin' ? signIn : signUp,
    { error: '' },
  )

  return (
    <div className='bg-background flex min-h-[100dvh] flex-col justify-center px-4 py-12 sm:px-6 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='flex justify-center'>
          <CircleIcon className='h-12 w-12 text-orange-500' />
        </div>
        <h2 className='text-foreground mt-6 text-center text-3xl font-extrabold'>
          {mode === 'signin' ? 'Sign in to your account' : 'Create your account'}
        </h2>
      </div>

      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <form className='space-y-6' action={formAction}>
          <input type='hidden' name='redirect' value={redirect || ''} />
          <input type='hidden' name='priceId' value={priceId || ''} />
          <input type='hidden' name='inviteId' value={inviteId || ''} />
          <div>
            <Label htmlFor='email'>Email</Label>
            <div className='mt-1'>
              <Input
                id='email'
                name='email'
                type='email'
                autoComplete='email'
                defaultValue={state.email}
                required
                maxLength={50}
                placeholder='Enter your email'
              />
            </div>
          </div>

          <div>
            <Label htmlFor='password'>Password</Label>
            <div className='mt-1'>
              <Input
                id='password'
                name='password'
                type='password'
                autoComplete={mode === 'signin' ? 'current-password' : 'new-password'}
                defaultValue={state.password}
                required
                minLength={8}
                maxLength={100}
                placeholder='Enter your password'
              />
            </div>
          </div>

          {state?.error && <div className='text-sm text-red-500'>{state.error}</div>}

          <div>
            <Button
              type='submit'
              className='flex w-full cursor-pointer items-center justify-center'
              disabled={pending}
            >
              {pending ? (
                <>
                  <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                  Loading...
                </>
              ) : mode === 'signin' ? (
                'Sign in'
              ) : (
                'Sign up'
              )}
            </Button>
          </div>
        </form>

        <div className='mt-6'>
          <div className='relative'>
            <div className='absolute inset-0 flex items-center'>
              <div className='border-border w-full border-t' />
            </div>
            <div className='relative flex justify-center text-sm'>
              <span className='bg-background text-muted-foreground px-2'>
                {mode === 'signin' ? 'New to our platform?' : 'Already have an account?'}
              </span>
            </div>
          </div>

          <div className='mt-6'>
            <Link
              href={`${mode === 'signin' ? '/sign-up' : '/sign-in'}${
                redirect ? `?redirect=${redirect}` : ''
              }${priceId ? `&priceId=${priceId}` : ''}`}
            >
              <Button
                type='button'
                variant={'outline'}
                className='flex w-full cursor-pointer items-center justify-center'
              >
                {mode === 'signin' ? 'Create an account' : 'Sign in to existing account'}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
