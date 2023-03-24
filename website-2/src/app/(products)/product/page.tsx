import { ProductTabs } from '@/app/(products)/product/v'
import { ArrowLink } from '@/ui/link-with-arrow'
import { ProductCard } from '@/ui/product-card'

export default function ProductPage() {
	return (
		<main className="overflow-auto space-y-10 pb-4">
			<div className="text-sm breadcrumbs sticky top-0 bg-base-100 border-b">
				<ul className="container">
					<li>
						<a>Home</a>
					</li>
					<li>
						<a>Documents</a>
					</li>
					<li>Add Document</li>
				</ul>
			</div>
			<section className="container grid gap-5 md:grid-cols-[0.65fr,0.35fr]">
				<div className="flex flex-col gap-4 md:flex-row-reverse">
					<div className="min-h-[60vh] w-full bg-amber-400 rounded-2xl">fff</div>
					<div className="flex  gap-3 md:flex-col">
						{Array(4)
							.fill('')
							.map((_, id) => (
								<div
									className="w-[clamp(4rem,5vw,5rem)] h-[clamp(4rem,5vw,5rem)] bg-amber-500 rounded-2xl"
									key={id}
								></div>
							))}
					</div>
				</div>
				<div className="min-h-[60vh] w-full p-10 rounded-2xl border flex flex-col justify-between gap-4">
					<div className="flex justify-between items-center">
						<h3 className="text-2xl">Cotton dress</h3>
						<h3 className="text-2xl font-semibold">N1,000</h3>
					</div>
					{['Color', 'Size', 'Quantity'].map(item => (
						<div key={item} className="space-y-3">
							<h6 className="text-sm font-medium">{item}</h6>
							<div className="flex  gap-3">
								{Array(4)
									.fill('')
									.map((_, id) => (
										<div
											className="w-[clamp(3rem,3vw,5rem)] h-[clamp(3rem,3vw,5rem)] bg-amber-500 rounded-full"
											key={id}
										></div>
									))}
							</div>
						</div>
					))}
					<div className="flex gap-3">
						<button className="btn grow bg-black text-base-100">Add to Cart</button>
						<button className="btn btn-circle btn-outline">v</button>
					</div>
				</div>
			</section>
			{/* related products */}
			<section className="space-y-7 container">
				<div className="flex justify-between items-center gap-3">
					<h3 className="text-[clamp(2rem,4vw,4rem)]">Related Products</h3>
					<ArrowLink className="btn-outline" href="">
						View more
					</ArrowLink>
				</div>
				<div className="overflow-x-scroll scrollbar-thin scrollbar-thumb-black scrollbar-thumb-rounded-full scrollbar-track-base-200 scrollbar-track-rounded-full">
					<div className="flex gap-4 w-screen pb-8">
						{Array(10)
							.fill(null)
							.map((_, idx) => (
								<div className="w-64 h-64" key={idx}>
									<ProductCard />
								</div>
							))}
					</div>
				</div>
			</section>
		</main>
	)
}
