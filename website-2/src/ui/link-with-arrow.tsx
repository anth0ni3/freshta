'use client'
import React from 'react'
import Link, { LinkProps } from 'next/link'
import { ArrowRight } from 'react-iconly'

import { cn } from '@/lib/utils'

interface ArrowLinkProps extends LinkProps, React.HTMLAttributes<HTMLAnchorElement> {}

export function ArrowLink({ children, className, ...others }: ArrowLinkProps) {
  return (
    <Link {...others} className={cn('btn flex justify-between items-center', className)}>
      {children}
      <ArrowRight
        set="light"
        style={{
          rotate: '-45deg',
        }}
      />
    </Link>
  )
}
