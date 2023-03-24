import Link from 'next/link'

export function Footer() {
  return (
    <footer className=" mb-4 py-8 container border-t flex flex-col md:flex-row md:justify-between gap-8">
      <div className="flex flex-col gap-8 md:justify-between">
        <Link href="/" className="text-2xl leading-3 font-bold">
          AGENCY
        </Link>
        <div className="flex gap-8">
          <span className="border rounded-full p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </span>
          <span className="border rounded-full p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </span>
          <span className="border rounded-full p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </span>
        </div>
      </div>
      <div className="flex gap-x-8">
        <ul className="space-y-3 font-medium">
          <li>
            <Link href="">Woman</Link>
          </li>
          <li>
            <Link href="">Man</Link>
          </li>
          <li>
            <Link href="">Catalogue</Link>
          </li>
          <li>
            <Link href="">New Arrivals</Link>
          </li>
        </ul>
        <ul className="space-y-3 font-medium hidden md:block">
          <li>
            <Link href="">Search</Link>
          </li>
          <li>
            <Link href="">Profile</Link>
          </li>
          <li>
            <Link href="">Favourites</Link>
          </li>
          <li>
            <Link href="">Cart</Link>
          </li>
        </ul>
        <ul className="space-y-3 font-medium">
          <li>
            <Link href="">Contact Us</Link>
          </li>
          <li>
            <Link href="">Support Center</Link>
          </li>
          <li>
            <Link href="">Privacy Policy</Link>
          </li>
          <li>
            <Link href="">Terms and Conditions</Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}
