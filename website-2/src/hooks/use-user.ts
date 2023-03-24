import { create } from 'zustand'
import { User } from 'next-auth'

import { getCurrentUser } from '@/lib/session'

type U = {
  user?: any
  setUser: (user: any) => any
}

export const useUserState = create<U>(set => ({
  user: '',
  setUser: async () => {
    const user = await getCurrentUser()
    return set(state => ({ user }))
  },
}))
