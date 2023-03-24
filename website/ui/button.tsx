import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean
}

export function Button({ className, children, fullWidth, ...others }: ButtonProps) {
  return (
    <button
      className={cn(
        'h-11 rounded-md bg-primary px-4 py-2 text-center font-medium text-white hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/50 disabled:opacity-50 dark:hover:bg-[#050708]/30 dark:focus:ring-slate-500 items-center justify-center',
        className,
        fullWidth ? 'flex w-full' : 'inline-flex'
      )}
      {...others}
    >
      {children}
    </button>
  )
}
