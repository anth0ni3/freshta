import { Dropdown } from '@/ui/dropdown'
import Link from 'next/link'

export function CartPreview() {
  const cartItems = true
  return (
    <Dropdown.Content>
      {!cartItems ? (
        <div className="space-y-4">
          <p className="text-center mt-4">No products in cart</p>
          <Link className="btn btn-primary w-full " href="/catalogue">
            Add Products
          </Link>
        </div>
      ) : (
        <>
          <Dropdown.Item>ddd</Dropdown.Item>
          <Dropdown.Item>ddd</Dropdown.Item>
          <Dropdown.Item>ddd</Dropdown.Item>
          <Link className="btn btn-link w-full btn-sm" href="">
            View All Cart
          </Link>
        </>
      )}
    </Dropdown.Content>
  )
}
