import { siteConfig } from '@/config/site'
import { Icons } from '@/components/icons'

export function Footer() {
  return (
    <footer className="mt-2">
      <section className=" border-y ">
        <div className="container space-y-4 @md/body:space-y-0 @md/body:grid grid-cols-4 py-8 gap-x-8">
          <div className="space-y-4 first">
            <h3 className="text-xl font-bold">FRESHTA</h3>
            <p className="">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quaerat ipsa neque nobis
              porro eveniet harum, accusamus aut illo ullam.
            </p>
            <div className="flex items-center gap-x-4">
              <span className="bg-black rounded-full grid place-content-center p-3">
                <Icons.facebook className="text-white w-6 h-6" />
              </span>
              <span className="bg-black rounded-full grid place-content-center p-3">
                <Icons.twitter className="text-white w-6 h-6" />
              </span>{' '}
              <span className="bg-black rounded-full grid place-content-center p-3">
                <Icons.instagram className="text-white w-6 h-6" />
              </span>{' '}
              {/* <span className="bg-black rounded-full w-8 h-8">
              <Icons.facebook />
            </span> */}
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Help and Support</h3>
            <ul className="space-y-2">
              <li>
                <p>FAQs</p>
              </li>
              <li>
                <p>Shipping Service</p>
              </li>
              <li>
                <p>Payment Options</p>
              </li>
              <li>
                <p>Returns and Exchanges</p>
              </li>
              <li>
                <p>Product Care</p>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Help and Support</h3>
            <ul className="space-y-2">
              <li>FAQs</li>
              <li>Shipping Service</li>
              <li>Payment Options</li>
              <li>Returns and Exchanges</li>
              <li>Product Care</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Help and Support</h3>
            <ul className="space-y-2">
              <li>FAQs</li>
              <li>Shipping Service</li>
              <li>Payment Options</li>
              <li>Returns and Exchanges</li>
              <li>Product Care</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="container space-y-2 @md:flex items-center justify-between py-2">
        <p className="text-sm">
          Freshta ©️ copyright {new Date().getFullYear()}. All rights reserved
        </p>
        <p className="text-sm">Freshta@copyright 2023. All rights reserved</p>
      </section>
    </footer>
  )
}
