import Link from 'next/link'

export function CategoriesHeader() {
  return (
    <ul className="border-y p-5 font-semibold flex items-center justify-center gap-7 text-primary/60">
      <li>
        <Link href="" className="text-red-500">
          PROMO
        </Link>
      </li>
      <li>
        <Link href="">Promo</Link>
      </li>
      <li>
        <Link href="">Promo</Link>
      </li>
      <li>
        <Link href="">Promo</Link>
      </li>
    </ul>
  )
}
