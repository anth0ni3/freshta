'use client'
import { useNavState } from '@/hooks/use-nav'
import { useSpring, a } from '@react-spring/web'
import Link from 'next/link'

import './navigation.css'

export function Navigation() {
  const { open, toggle } = useNavState(state => state)

  const springs = useSpring({
    borderRadius: open ? 40 : 0,
  })
  return (
    <a.nav style={springs}>
      <div className="container h-full">
        <div className="nav-columns">
          <div className="nav-column">
            <div className="nav-label">Menu</div>
            <ul className="nav-links">
              {[
                {
                  name: 'Catalogue',
                  link: '/catalogue',
                },
                {
                  name: 'Saved',
                  link: '/saved',
                },
                {
                  name: 'Cart',
                  link: '/cart',
                },
              ].map(item => (
                <li key={item.link}>
                  <Link href={item.link} onClick={() => toggle(false)}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="nav-column">
            <div className="nav-label">Contact</div>
            <div className="nav-infos">
              <ul className="nav-info">
                <li className="nav-info-label">Email</li>
                <li>
                  <Link href="/contact">Get in touch with us</Link>
                </li>
                <li>
                  <Link href="/audit">Get a free audit</Link>
                </li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Headquarter</li>
                <li>Route du Jura 49</li>
                <li>1700 Fribourg</li>
                <li>Switzerland</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Phone</li>
                <li>+41 (0) 79 510 28 70</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Legal</li>
                <li>Privacy & Cookies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </a.nav>
  )
}
