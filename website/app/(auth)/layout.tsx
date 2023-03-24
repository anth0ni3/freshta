'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  return (
    <div className="lg:grid grid-cols-[0.5fr,0.5fr] gap-5 h-full">
      <div className="hidden relative overflow-hidden lg:grid place-content-center"></div>
      <div className="bg-white p-4 h-full">
        <div className="grid place-content-end text-sm max-w-xl mx-auto">
          <p>
            {pathname === '/login' ? 'Don&apos;t have an account yet?' : 'Already have an account?'}{' '}
            <Link href="#" className="text-blue-500">
              {pathname === '/login' ? 'Sign up now' : 'Sign in'}
            </Link>
          </p>
        </div>
        <main className="h-full grid items-center max-w-lg mx-auto">{children}</main>
      </div>
    </div>
  )
}
