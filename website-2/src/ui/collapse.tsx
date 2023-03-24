'use client'
import { createContext, useContext } from 'react'
import { useSpring, useSpringRef, animated } from '@react-spring/web'
import { useState } from 'react'
import { ChevronUp } from 'react-iconly'

const CollapseContext = createContext<any>({})

export function Collapse({ children }: any) {
	const [open, toggle] = useState(false)

	const handleClick = () => toggle(o => !o)

	return (
		<CollapseContext.Provider value={{ open, handleClick }}>
			<div className="py-4">{children}</div>
		</CollapseContext.Provider>
	)
}

Collapse.Label = function Label({ children }: any) {
	const { handleClick, open } = useContext(CollapseContext)

	const { rotate } = useSpring({
		rotate: open ? 0 : 180,
	})

	return (
		<div role="button" onClick={handleClick} className="flex items-center justify-between cursor-pointer mb-2">
			<label className="font-medium cursor-pointer">{children}</label>
			<animated.span style={{ rotate }}>
				<ChevronUp
					set="light"
					style={{
						width: '20px',
						height: '20px',
					}}
				/>
			</animated.span>
		</div>
	)
}

Collapse.Content = function Content({ children }: any) {
	const { open } = useContext(CollapseContext)

	const { maxHeight } = useSpring({
		maxHeight: open ? 500 : 0,
	})
	return (
		<animated.ul className="overflow-hidden  h-auto grid gap-2" style={{ maxHeight }}>
			{children}
		</animated.ul>
	)
}

Collapse.Item = function Item({ children }: any) {
	return <li className="py-2">{children}</li>
}
