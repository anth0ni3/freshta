import React from 'react'

import cardStyles from './card.module.css'

interface CardProps {}

export function Card({ children }: any) {
  return <div className={cardStyles.card}>{children}</div>
}
