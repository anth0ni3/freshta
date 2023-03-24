import { PromoCode } from './promo-code'

export default function CartPage() {
	return (
		<main className="overflow-auto space-y-10 pb-4">
			<section className="container grid gap-5 md:grid-cols-[0.7fr,0.3fr] pt-10">
				<div className="space-y-4">
					{/* <div className="not"></div> */}
					<div className="bag space-y-4">
						<h3 className="text-3xl">Bag</h3>
						<div className="products h-80 bg-pink-200 w-full"></div>
					</div>
				</div>
				<div className="summary space-y-6">
					<h3 className="text-3xl">Summary</h3>
					<div className="products h-80 bg-orange-200 w-full">
						<PromoCode />
					</div>
				</div>
			</section>
		</main>
	)
}
