import React from 'react'

import { Filter } from '@/ui/filter'
import { Footer } from '@/ui/footer'
import { ProductCard } from '@/ui/product-card'
import { FilterScreen, FilterToggleButton } from '@/app/(products)/catalogue/filter-screen'

export default async function CataloguePage() {
	return (
		<main className="overflow-auto space-y-10 @container/catalogue">
			<div className="py-2.5 sticky top-0 bg-base-100 z-[1] border-b">
				<div className="container justify-between items-center flex">
					<h3 className="text-[clamp(1.5rem,2.5vw,2.5rem)]">Catalogue</h3>
					<FilterToggleButton />
				</div>
			</div>
			<div className="container pb-6 flex gap-4">
				<div className="hidden lg:block lg:sticky z-[2] top-24 h-[78vh] w-80 bg-base-100">
					<Filter />
				</div>
				<FilterScreen />

				<div className="w-full grow  flex flex-col @sm/catalogue:grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
					{Array(12)
						.fill('')
						.map((i, l) => (
							<ProductCard key={l} />
						))}
				</div>
			</div>
		</main>
	)
}
