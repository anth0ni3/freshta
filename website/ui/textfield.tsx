'use client'

import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

import { cn } from '@/lib/utils'

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  htmlFor?: React.LabelHTMLAttributes<HTMLLabelElement>['htmlFor']
  labelClassName?: string | string[]
}

export function TextField({
  label,
  htmlFor,
  className,
  labelClassName,
  type,
  ...others
}: TextFieldProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const PasswordIcon = isPasswordVisible ? EyeOff : Eye

  return (
    <div className="grid gap-1">
      {label ? (
        <label className={cn('font-semibold text-sm', labelClassName)} htmlFor={htmlFor}>
          {label}
        </label>
      ) : null}
      <div className="relative h-10 my-0 mb-2 flex items-center justify-end px-3">
        <input
          // id="email"
          // placeholder="name@example.com"
          className={cn(
            'absolute top-0 left-0 right-0 bottom-0  w-full rounded-md border border-slate-300 py-2 pl-3 pr-9 placeholder:text-slate-400 hover:border-slate-400 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:ring-offset-1',
            className
          )}
          type={isPasswordVisible ? 'text' : type}
          // autoCapitalize="none"
          // autoComplete="email"
          // autoCorrect="off"
          // name="email"
          // disabled={isLoading}
          // {...register("email")}
          readOnly
          {...others}
        />
        {type === 'password' ? (
          <PasswordIcon
            className="z-[1] cursor-pointer"
            width={20}
            height={20}
            viewBox="0 0 24 20"
            onClick={() => setIsPasswordVisible(p => !p)}
          />
        ) : null}
      </div>

      {/* {errors?.email && (
              <p className="px-1 text-xs text-red-600">
                {errors.email.message}
              </p>
            )} */}
    </div>
  )
}
