'use client'

import React from 'react'
import { useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { userAuthSchema } from '@/lib/validations/auth'
import { toast } from '@/ui/toast'
import { cn } from '@/lib/utils'

type FormData = z.infer<typeof userAuthSchema>

export function LoginAuthForm({ className, ...props }: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userAuthSchema),
  })
  const [isLoading, setIsLoading] = React.useState(false)
  const searchParams = useSearchParams()

  async function onSubmit(data: FormData) {
    setIsLoading(true)

    const signInResult = await signIn('email', {
      email: data.email.toLowerCase(),
      redirect: false,
      // callbackUrl: searchParams?.get('from') || '/',
      callbackUrl: '/',
    })

    setIsLoading(false)

    if (!signInResult?.ok) {
      return toast({
        title: 'Something went wrong.',
        message: 'Your sign in request failed. Please try again.',
        type: 'error',
      })
    }

    return toast({
      title: 'Check your email',
      message: 'We sent you a login link. Be sure to check your spam too.',
      type: 'success',
    })
  }

  return (
    <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-3xl font-bold">Welcome back</h1>
      <p className="text-sm text-slate-600">Enter your email to sign in to your account</p>

      <input
        type="email"
        inputMode="email"
        placeholder="Type here"
        className="input input-bordered  rounded-3xl border-black focus:border-primary focus:ring-primary focus:outline-0 w-full"
        {...register('email')}
      />
      <p className="text-xs text-red-400">{errors.email ? errors.email.message : ''}</p>

      <button className={cn('btn btn-block btn-primary', isLoading ? 'loading' : '')}>
        Sign in with email
      </button>
    </form>
  )
}
