import Link from 'next/link'
import Image, { ImageProps } from 'next/image'
import { ProductCard } from '@/ui/product-card'
import { ArrowLink } from '@/ui/link-with-arrow'
import { Footer } from '@/ui/footer'

import a1 from '@/assets/images/christopher-campbell-rDEOVtE7vOs-unsplash.jpg'
import a2 from '@/assets/images/julian-wan-WNoLnJo7tS8-unsplash.jpg'
import a3 from '@/assets/images/leilani-angel-K84vnnzxmTQ-unsplash.jpg'
import a4 from '@/assets/images/michael-dam-mEZ3PoFGs_k-unsplash.jpg'

const images = [
	'https://images.pexels.com/photos/4244305/pexels-photo-4244305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',

	'https://images.pexels.com/photos/965324/pexels-photo-965324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
]

export default function Home() {
	return (
		<main className="overflow-auto">
			<div className="space-y-40 container bg-base-100">
				<section className=" mt-20 grid sm:grid-cols-[6fr,4fr] gap-8 min-h-[80vh]">
					<div className="flex flex-col gap-y-8 sm:order-2">
						<div className="p-8 grid place-content-center gap-y-4 border-2 rounded-3xl">
							<div className="avatar-group -space-x-6">
								<div className="avatar">
									<div className="w-12">
										<Image src={a3} alt="ff" />
									</div>
								</div>
								<div className="avatar">
									<div className="w-12">
										<Image src={a2} alt="ff" />
									</div>
								</div>
								<div className="avatar">
									<div className="w-12">
										<Image src={a4} alt="ff" />
									</div>
								</div>
								<div className="avatar">
									<div className="w-12">
										<Image src={a1} alt="ff" />
									</div>
								</div>
								<div className="avatar">
									<div className="w-12">
										<Image src={a2} alt="ff" />
									</div>
								</div>
								<div className="avatar">
									<div className="w-12">
										<Image src={a3} alt="ff" />
									</div>
								</div>
								<div className="avatar">
									<div className="w-12">
										<Image src={a4} alt="ff" />
									</div>
								</div>
								<div className="avatar placeholder">
									<div className="w-12 bg-primary text-white">
										<span>+99</span>
									</div>
								</div>
							</div>
						</div>
						<div className="p-8 justify-center flex flex-col gap-y-8 border-2 rounded-3xl grow">
							<div className="space-y-4">
								<p className="text-6xl xs:text-[clamp(6rem,3vw,7rem)] font-medium leading-none">Shop.</p>
								<p className="text-6xl xs:text-[clamp(6rem,3vw,7rem)] font-medium text-primary leading-none">Ship.</p>
								<p className="text-6xl xs:text-[clamp(6rem,3vw,7rem)] font-medium leading-none">Wear.</p>
							</div>
							<p className="text-sm font-medium">Online Fashion Store Online</p>
							<Link href="" className="btn btn-primary ">
								Shop Now
							</Link>
						</div>
					</div>
					<div className="flex flex-col gap-y-8 grow h-full">
						{images.map(image => (
							<ImageCard src={image} alt="d" key={image} className=" object-top" height={320} width={320} />
						))}
					</div>
				</section>
				<section className="border-y text-uppercase text-3xl font-light py-4 text-center">
					WEAR GOOD STUFF . LOOK GOOD . FEEL GOOD . WEAR GOOD STUFF . LOOK GOOD . FEEL GOOD
				</section>
				{/* catalogues */}
				<section className="space-y-20">
					<div className="flex justify-between items-center gap-3 flex-wrap">
						<h3 className="text-[clamp(2rem,4vw,4rem)]">Categories</h3>
						<ArrowLink className="btn-outline" href="">
							View more
						</ArrowLink>
					</div>
					<div className="overflow-x-scroll scrollbar-thin scrollbar-thumb-black scrollbar-thumb-rounded-full scrollbar-track-base-200 scrollbar-track-rounded-full">
						<div className="flex gap-4 w-screen pb-8">
							{Array(10)
								.fill(null)
								.map((_, idx) => (
									<div className="relative rounded-3xl overflow-hidden h-[240px] min-w-[240px]" key={idx}>
										<div className="h-full  bg-orange-500">gg</div>
										<ArrowLink href="" className="absolute bottom-0 left-0 right-0 btn-outline  bg-base-100">
											Bag
										</ArrowLink>
									</div>
								))}
						</div>
					</div>
				</section>
				{/* new products */}
				<section className="space-y-20">
					<div className="flex justify-between items-center gap-3  flex-wrap">
						<h3 className="text-[clamp(2rem,4vw,4rem)]">New Products</h3>
						<ArrowLink className="btn-outline" href="">
							View more
						</ArrowLink>
					</div>
					<div className="overflow-x-scroll scrollbar-thin scrollbar-thumb-black scrollbar-thumb-rounded-full scrollbar-track-base-200 scrollbar-track-rounded-full">
						<div className="flex gap-4 w-screen pb-8">
							{Array(10)
								.fill(null)
								.map((_, idx) => (
									<div className="w-80 h-80" key={idx}>
										<ProductCard />
									</div>
								))}
						</div>
					</div>
				</section>
				<Footer />
			</div>
		</main>
	)
}

function ImageCard({ linkTitle, href = '', alt, ...others }: ImageProps & any) {
	return (
		<div className="flex flex-col gap-y-4 h-[400px]   bg-base-200 rounded-3xl relative overflow-hidden">
			<ArrowLink href={href} className="btn-sm btn-outline absolute left-4 top-4">
				{linkTitle}
			</ArrowLink>
			<Image alt={alt} {...others} />
		</div>
	)
}
