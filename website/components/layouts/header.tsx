import { IconWithBadge } from '@/ui/icon-with-badge'
import { Heart, ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import { UserAccountNav } from '../user-account-nav'
import { TypeSelect } from './gender'
// import { UserAvatar } from './user-avatar'

// bg-opacity-50 backdrop-blur backdrop-filter  firefox:bg-opacity-90

export function Navbar() {
  return (
    <header className="sticky top-0 left-0 bg-primary flex justify-between items-center text-white py-4 px-4 h-16  z-30 ">
      <div>
        <TypeSelect />
      </div>
      <h2 className="text-3xl text-center font-semibold">FRESHTA</h2>
      <div className="flex items-center justify-center gap-x-8">
        {/* <UserAccountNav
          user={{
            name: 'anthony',
            image: 'https://avatars.githubusercontent.com/u/44031803?s=40&v=4',
            email: 'seboh44@gmail.com',
          }}
        /> */}
        <div className="flex items-center gap-2">
          <IconWithBadge icon={<Heart />} />
          <IconWithBadge icon={<ShoppingBag />} badge={4} />
        </div>
        <span className="w-[1px] h-5 inline-block bg-white"></span>
        <span>
          <Image
            src="https://avatars.githubusercontent.com/u/44031803?s=40&v=4"
            alt=""
            width={28}
            height={28}
            className="object-cover rounded-full"
          />
        </span>
      </div>
    </header>
  )
}

// export function Nav () {
//   return (
// <nav>

// </nav>
//   )
// }
