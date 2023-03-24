'use client'

import { useState } from 'react'

import { Tabs } from '@/ui/tabs'

export function ProductTabs() {
	const [activeComp, setActiveComp] = useState('product-details')

	return (
		<Tabs value={activeComp} onTabChange={setActiveComp} className="px-2 mt-2">
			<Tabs.List>
				<Tabs.Tab value="product-details">Details</Tabs.Tab>
				<Tabs.Tab value="product-sales">Sales</Tabs.Tab>
			</Tabs.List>
			<Tabs.Panel value="product-details" className="">
				Anthony
			</Tabs.Panel>
			<Tabs.Panel value="product-sales" className="">
				onu
			</Tabs.Panel>
		</Tabs>
	)
}
