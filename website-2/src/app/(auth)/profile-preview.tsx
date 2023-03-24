import Link from 'next/link'
import { signOut } from 'next-auth/react'

import { Dropdown } from '@/ui/dropdown'
import type { UserAccountNavProps } from '@/components/header'

export function ProfilePreview({ user }: UserAccountNavProps) {
	return (
		<Dropdown.Content className="">
			{!user ? (
				<div className="space-y-4">
					<p className="text-center mt-4">You are not logged in</p>
					<Link className="btn btn-primary w-full " href="/login">
						Log in
					</Link>
				</div>
			) : (
				<>
					{user?.name ? <Dropdown.Item>{user?.name}</Dropdown.Item> : null}

					<Dropdown.Item>
						<p className="text-gray-400">{user?.email}</p>
					</Dropdown.Item>

					<div className="divider  my-1"></div>
					<Dropdown.Item>
						<span>Purchases and Reviews</span>
					</Dropdown.Item>
					<Dropdown.Item>
						<span>Messages</span>
					</Dropdown.Item>
					<Dropdown.Item>
						<span>Your Offers</span>
					</Dropdown.Item>
					<Dropdown.Item>
						<span>Account Settings</span>
					</Dropdown.Item>
					<div className="divider my-1"></div>

					<Dropdown.Item>
						<button
							onClick={() =>
								signOut({
									callbackUrl: '/',
								})
							}
						>
							Sign out
						</button>
					</Dropdown.Item>
				</>
			)}
		</Dropdown.Content>
	)
}
