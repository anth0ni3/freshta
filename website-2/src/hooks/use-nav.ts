import { create } from 'zustand'

type NavState = {
  open: boolean
  toggle: (o?: boolean) => void
}

export const useNavState = create<NavState>(set => ({
  open: false,
  toggle: o => set(state => ({ open: o || !state.open })),
}))
