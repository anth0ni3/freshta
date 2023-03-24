export default function CartPage() {
	return (
		<main className="overflow-auto space-y-10 pb-4">
			<section className="container grid gap-5 md:grid-cols-[0.7fr,0.3fr] pt-10">
				<div className="flex flex-col gap-4 md:flex-row-reverse">
					<div className="not"></div>
					<div className="bag"></div>
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
		</main>
	)
}
