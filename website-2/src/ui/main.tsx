'use client'
import React from 'react'
import { useTransition, useSpring, useChain, config, a, useSpringRef } from '@react-spring/web'

import { useNavState } from '@/hooks/use-nav'
import { Header } from '../components/header'

import styles from './main.module.css'
import { Footer } from './footer'
import { cn } from '@/lib/utils'

export function Main({ children }: any) {
	const open = useNavState(state => state.open)

	// const height =
	//   typeof window !== undefined
	//     ? window.innerWidth <= 640
	//       ? '75%'
	//       : window.innerHeight - 250
	//     : '70%'

	const springs = useSpring({
		y: open ? '75%' : '0%',
		borderRadius: open ? 32 : 0,
		overflowY: open ? 'hidden' : 'auto',
	})

	return (
		// @ts-ignore
		<a.div style={springs} className={cn(styles.main, 'bg-base-100 border-t')}>
			{/* <Header /> */}
			{/* <main className="container static"> */}
			{children}
			{/* </main> */}
			{/* <Footer /> */}
		</a.div>
	)
}
