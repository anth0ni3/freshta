'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { User } from 'next-auth'

import { Bag2, Heart, Search, User as UserIcon } from 'react-iconly'
import { useNavState } from '@/hooks/use-nav'
import { cn } from '@/lib/utils'
import { Dropdown } from '../ui/dropdown'
import { ProfilePreview } from '@/app/(auth)/profile-preview'
import { CartPreview } from '@/app/(products)/cart/cart-preview'
import headerStyles from './header.module.css'

const { nav_link, nav_links, nav_toggler, wrapper, header, logo, nav_togglers, nav_toggler_close, left, right } =
	headerStyles

export interface UserAccountNavProps extends React.HTMLAttributes<HTMLDivElement> {
	user: Pick<User, 'name' | 'image' | 'email'> | undefined | null
}
export function Header({ user }: UserAccountNavProps) {
	const toggle = useNavState(state => state.toggle)

	return (
		<header className={header}>
			<div className="container">
				<div className={wrapper}>
					<ul className={cn(nav_links, left)}>
						<li className={nav_link}>
							<Link href="">Woman</Link>
						</li>
						<li className={nav_link}>
							<Link href="">Man</Link>
						</li>
						<li className={nav_link}>
							<Link href="/catalogue">Catalogue</Link>
						</li>
						<li className={nav_link}>
							<Link href="">New Arrivals</Link>
						</li>
					</ul>
					<div className={logo}>
						<Link href="/">AGENCY</Link>
					</div>
					<div className={nav_togglers}>
						<button className={nav_toggler_close} onClick={() => toggle(false)}>
							Menu
						</button>
					</div>
					<ul className={cn(nav_links, right)}>
						<li className={nav_link}>
							<Dropdown className="dropdown-end">
								<Dropdown.Label>
									<Search set="light" />
								</Dropdown.Label>
								<Dropdown.Content>
									<Dropdown.Item>ddd</Dropdown.Item>
								</Dropdown.Content>
							</Dropdown>
						</li>

						<li className={nav_link}>
							<Dropdown className="dropdown-end">
								<Dropdown.Label>
									<Heart set="light" />
								</Dropdown.Label>
								<Dropdown.Content>
									<Dropdown.Item>ddd</Dropdown.Item>
								</Dropdown.Content>
							</Dropdown>
						</li>
						<li className={nav_link}>
							<Link href="/cart">
								<Bag2 set="light" />
							</Link>
						</li>
						<li className={nav_link}>
							{user ? (
								<Dropdown className="dropdown-end">
									<Dropdown.Label>{user?.image ? 'v' : <UserIcon set="light" />}</Dropdown.Label>
									<ProfilePreview user={user} />
								</Dropdown>
							) : (
								<Link href="/login" className="btn btn-sm btn-primary">
									Log in
								</Link>
							)}
						</li>
					</ul>
				</div>
			</div>
		</header>
	)
}
