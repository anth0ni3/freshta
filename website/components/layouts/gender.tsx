'use client'

import { useState } from 'react'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const TypeSelect = () => {
  let [plan, setPlan] = useState('startup')

  return (
    <div className="flex items-center gap-x-8">
      <button className="flex items-center justify-center bg-transparent text-white/70 cursor-pointer hover:text-white/95 font-semibold text-center">
        All
      </button>
      <button className="flex items-center justify-center bg-transparent text-white/70 cursor-pointer hover:text-white/95 font-semibold text-center">
        Male
      </button>
      <button className="flex items-center justify-center bg-transparent text-white/70 cursor-pointer hover:text-white/95 font-semibold text-center">
        Female
      </button>
    </div>
  )
}
