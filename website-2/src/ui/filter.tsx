'use client'
import { Collapse } from './collapse'
import { filterData } from './filter-data'

export function Filter() {
	return (
		<section className="  lg:h-full md:border md:rounded-lg p-5 overflow-auto scrollbar-thin scrollbar-thumb-black scrollbar-thumb-rounded-full scrollbar-track-base-200 scrollbar-track-rounded-full bg-base-100">
			<h3 className="font-bold text-xl">Filter By:</h3>
			{filterData.map((filter, id) => (
				<>
					<Collapse key={id}>
						<Collapse.Label>{filter.title}</Collapse.Label>
						<Collapse.Content>
							{filter.options.map((option, idx) => (
								<Collapse.Item key={idx}>
									{/* <div className="form-control"> */}
									<label className="cursor-pointer flex items-center gap-2">
										<input
											type="checkbox"
											className="checkbox  rounded-md border-base-300 focus:ring-0 focus:outline-none"
										/>
										<span className="text-sm">{option}</span>
									</label>
									{/* </div> */}
								</Collapse.Item>
							))}
						</Collapse.Content>
					</Collapse>
					<div className="border-t  bg-black last:hidden"></div>
				</>
			))}
		</section>
	)
}
