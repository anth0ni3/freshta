import { cn } from '@/lib/utils'

export function Dropdown({ children, className }: any) {
	return <div className={cn('dropdown', className)}>{children}</div>
}

Dropdown.Label = function Label({ children, className }: any) {
	return (
		<label tabIndex={0} className={cn('rounded-full  hover:text-primary cursor-pointer', className)}>
			{children}
		</label>
	)
}

Dropdown.Content = function Content({ children, className }: any) {
	return (
		<ul tabIndex={0} className={cn('dropdown-content menu p-2 bg-base-100 border rounded-box w-52', className)}>
			{children}
		</ul>
	)
}

Dropdown.Item = function Item({ children, className }: any) {
	return <li className={cn('', className)}>{children}</li>
}
