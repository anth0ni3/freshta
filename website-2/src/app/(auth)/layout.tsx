'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { ChevronLeft } from 'react-iconly'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  return (
    <div className="fixed inset-0 h-full  py-6 z-[2] bg-base-100">
      <div className="container h-full  flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <Link className="btn btn-sm pl-1 gap-1 btn-ghost" href="/">
            <ChevronLeft set="light" />
            <span>Back</span>
          </Link>
          {pathname === '/login' ? (
            <Link href="/register" className="btn btn-sm btn-ghost">
              Register
            </Link>
          ) : (
            <Link href="/login" className="btn btn-sm btn-ghost">
              Login
            </Link>
          )}
        </div>
        <div className="lg:grid grid-cols-[0.6fr,0.4fr] h-full  gap-4">
          <section className="hidden static overflow-hidden lg:grid h-full  bg-green-300 rounded-3xl"></section>
          <section className=" overflow-hidden h-full  rounded-3xl lg:border p-auto">
            <div className="max-w-xs relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-center px-1">
              {children}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
