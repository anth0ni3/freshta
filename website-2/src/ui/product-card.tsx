'use client'
import Image from 'next/image'
import { Bag2, Heart } from 'react-iconly'

interface ProductCardProps {
	title?: string
	image?: any
	price?: string
	description?: string
}

export function ProductCard() {
	return (
		<div className="relative rounded-3xl overflow-hidden h-full w-full aspect-square">
			<div className="h-full  bg-orange-500">gg</div>
			<div className="flex absolute bottom-0 left-0 right-0 h-20 justify-between items-center  bg-base-100 rounded-3xl px-4 border">
				<div>
					<p>Cotton Dress</p>
					<p className="font-semibold">N12,000</p>
				</div>
				<div className="flex gap-2">
					<button className="btn btn-circle btn-outline">
						<Bag2 set="light" />
					</button>
					<button className="btn btn-circle btn-outline">
						<Heart set="light" />
					</button>
				</div>
			</div>
		</div>
	)
}
