import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { unstable_getServerSession } from 'next-auth/next'
import z from 'zod'

import { authOptions } from '@/lib/auth'

export const schema = z.object({
	userId: z.string(),
})

export function withCurrentUser(handler: NextApiHandler) {
	return async function (req: NextApiRequest, res: NextApiResponse) {
		try {
			const query = schema.parse(req.query)

			// Check if the user has access to this user.
			const session = await unstable_getServerSession(req, res, authOptions)

			// if(!session?.user || !session.user.) return null

			// if (query.userId !== session?.user.id) {
			//   return res.status(403).end()
			// }

			return handler(req, res)
		} catch (error) {
			if (error instanceof z.ZodError) {
				return res.status(422).json(error.issues)
			}

			return res.status(500).end()
		}
	}
}
