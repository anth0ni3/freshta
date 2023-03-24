'use client'
import { cn } from '@/lib/utils'
import React from 'react'

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Checkbox({ className, ...others }: CheckboxProps) {
  return (
    <input
      type="checkbox"
      className={cn(
        'h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer',
        className
      )}
      {...others}
    />
  )
}
