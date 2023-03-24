'use client'

import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { create } from 'zustand'

import { Filter } from '@/ui/filter'
import { Filter as FilterIcon, ArrowLeft } from 'react-iconly'
import { cn } from '@/lib/utils'

const useStore = create<{ open: boolean; toggle: () => void }>(set => ({
	open: false,
	toggle: () => set(state => ({ open: !state.open })),
}))

export const FilterScreen = () => {
	const { open, toggle } = useStore(state => state)

	// const handleEscPress = (e: React.KeyboardEvent<HTMLButtonElement>) => {
	// 	if (e.key === 'Escape') {
	// 		// toggle()
	// 		console.error(e.key)
	// 	}
	// 	console.log(e)
	// }
	//
	// useEffect(() => {
	// 	window.addEventListener('keypress', e => handleEscPress(e))
	// })

	return createPortal(
		<div className={cn('fixed z-[3] inset-0  w-full bg-base-100 overflow-auto', open ? '' : 'hidden')}>
			<div className="flex items-center justify-between lg:hidden sticky top-0 p-5 bg-base-100">
				<button className="btn btn-outline btn-sm" onClick={toggle}>
					<ArrowLeft set="light" style={{ rotate: '45deg' }} />
					<span>Back</span>
				</button>
				<button className="btn btn-ghost btn-sm">Clear Filters</button>
			</div>
			<div className="p-5 space-y-4 lg:hidden">
				<p className="font-bold text-xl">Sort by:</p>

				<select className="select select-bordered w-full focus:border-primary focus:ring-primary focus:outline-0">
					<option disabled>Who shot first?</option>
					<option>Han Solo</option>
					<option>Greedo</option>
				</select>
			</div>
			<div className="flex flex-wrap p-5 gap-2 lg:hidden">
				{Array(10)
					.fill('')
					.map((_, index) => (
						<span className="btn btn-secondary" key={index}>
							Anthony
						</span>
					))}
			</div>
			<Filter />
		</div>,
		document.body
	)
}

export const FilterToggleButton = () => {
	const toggle = useStore(state => state.toggle)
	return (
		<button className="btn btn-ghost btn-circle" onClick={toggle}>
			<FilterIcon set="light" />
		</button>
	)
}
