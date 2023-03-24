'use client'

import * as React from 'react'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

import { MainNavItem } from 'types'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/config/site'
import { Icons } from '@/components/icons'

interface MainNavProps {
  items?: MainNavItem[]
  children?: React.ReactNode
}

export function MainNav({ items, children }: MainNavProps) {
  return (
    <nav className="flex gap-x-7 justify-center items-center p-5 text-sm font-semibold text-gray-400">
      <Link href="">Anthony</Link>
      <Link href="">Anthony</Link>
      <Link href="">Anthony</Link>
      <Link href="">Anthony</Link>
    </nav>
  )
}
