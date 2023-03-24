'use client'
import React, { useContext } from 'react'
import { animated } from '@react-spring/web'

import { cn } from '@/lib/utils'

type TabsProps = {
	value?: string | null
	onTabChange: unknown
	defaultValue?: string | null
	// children: Children
} & React.HTMLAttributes<HTMLDivElement>

const TabsContext = React.createContext<Partial<TabsProps>>({})

export function Tabs({ children, onTabChange, value, className }: Partial<TabsProps>) {
	return (
		<TabsContext.Provider
			value={{
				onTabChange,
				value,
			}}
		>
			<div className={cn('', className)}>{children}</div>
		</TabsContext.Provider>
	)
}

Tabs.List = function List({ children }: Partial<TabsProps>) {
	return <div className="flex gap-4 items-center py-2 border-b-4 border-b-base-300">{children}</div>
}

Tabs.Panel = function Panel({ children, value, className }: Partial<TabsProps>) {
	const ctx = useContext(TabsContext)
	const active = ctx.value === value
	return active ? <animated.div className={cn('', className)}>{children}</animated.div> : null
}

Tabs.Tab = function Tab({ children, value, className }: Partial<TabsProps>) {
	const ctx = useContext(TabsContext)
	const active = ctx.value === value
	return (
		<button
			className={cn('', active ? 'border-b-4' : '', className)}
			onClick={() => typeof ctx.onTabChange === 'function' && ctx.onTabChange(value)}
		>
			{children}
		</button>
	)
}
