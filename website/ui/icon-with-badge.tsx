import { cn } from '@/lib/utils'

interface IconWithBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  icon: React.ReactNode
  badge?: React.ReactNode | number | string
  iconContainerClass?: string
}

export function IconWithBadge({ icon, badge, iconContainerClass, className }: IconWithBadgeProps) {
  return (
    <span className="relative inline-block cursor-pointer">
      {badge ? (
        <span
          className={cn(
            'absolute -top-1 -right-1 inline-flex items-center justify-center text-primary text-xs font-semibold bg-white rounded-full h-2 w-2 p-2',
            className
          )}
        >
          {badge}
        </span>
      ) : null}
      <span
        className={cn(
          'inline-flex items-center justify-center p-2.5 text-white bg-white/5 hover:bg-white/20 rounded-full w-9 h-9',
          iconContainerClass
        )}
      >
        {icon}
      </span>
    </span>
  )
}
