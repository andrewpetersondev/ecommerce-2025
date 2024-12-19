import React from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import { CallToAction, Company, Product } from "@/utils/interfaces";

// Props are used to pass down the state and handlers for toggling the menu visibility,
// as well as the menu items (products, calls to action, and company details) from the parent Navbar component.
interface Props {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  products: Product[];
  callsToAction: CallToAction[];
  company: Company[];
}
// The MobileMenu component is designed as an overlay dialog for mobile devices,
// enabling navigation with a structured menu and preserving accessibility.
export default function MobileMenu({
  isMobileMenuOpen,
  toggleMobileMenu,
  products,
  callsToAction,
  company,
}: Props) {
  return (
    // Dialog component from Headless UI handles focus management and accessibility
    // for the mobile menu. The 'open' prop controls its visibility.
    <Dialog
      open={isMobileMenuOpen}
      onClose={toggleMobileMenu}
      className="lg:hidden"
      aria-labelledby="mobile-menu-title"
      aria-describedby="mobile-menu-description"
    >
      {/* A backdrop overlay covers the whole screen, emphasizing the mobile menu */}
      <div className="fixed inset-0 z-10" />

      {/* DialogPanel wraps the actual menu content and specifically anchors it to the right */}
      <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <h2 id="mobile-menu-title" className="sr-only">
          Mobile Menu
        </h2>
        <p id="mobile-menu-description" className="sr-only">
          Navigate through the menu items below.
        </p>
        {/* Company logo and close button are placed on the top for quick access */}
        <div className="flex items-center justify-between">
          <Link href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              // Placeholder logo - replace with dynamic branding if necessary.
              alt="Your Company"
              width={600}
              height={600}
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
          </Link>
          <button
            // Close button triggers the 'toggleMobileMenu' function to hide the menu.
            onClick={toggleMobileMenu}
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon aria-hidden="true" className="size-6 h-6 w-6" />
          </button>
        </div>

        {/* Main menu structure starts here with groupings for products and features */}
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {/* Disclosure is used to create collapsible menus for nested items */}
              <Disclosure as="div" className="-mx-3">
                <DisclosureButton
                  aria-expanded="false"
                  className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Product
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="size-5 flex-none group-data-open:rotate-180"
                  />
                </DisclosureButton>
                <DisclosurePanel className="mt-2 space-y-2">
                  {[...products, ...callsToAction].map((item, index) => (
                    // Combines multiple dynamic lists (products and callsToAction) for combined display in Product section.
                    <DisclosureButton
                      key={`${item.name}--${index}`}
                      as="a"
                      href={item.href}
                      className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </DisclosureButton>
                  ))}
                </DisclosurePanel>
              </Disclosure>
              <Link
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
              >
                Features
              </Link>
              <Link
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
              >
                Marketplace
              </Link>
              {/* Another collapsible section for company links */}
              <Disclosure as="div" className="-mx-3">
                <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                  Company
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="size-5 flex-none group-data-open:rotate-180"
                  />
                </DisclosureButton>
                <DisclosurePanel className="mt-2 space-y-2">
                  {company.map((item) => (
                    // Iterating through company items passed as props.
                    <DisclosureButton
                      key={item.name}
                      as="a"
                      href={item.href}
                      className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </DisclosureButton>
                  ))}
                </DisclosurePanel>
              </Disclosure>
            </div>
            {/* Additional standalone navigation options like login are outside collapsible areas */}
            <div className="py-6">
              <Link
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
              >
                Log in
              </Link>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
    /* MobileMenu is placed outside <nav> in the Navbar component to isolate it
        for accessibility and DOM hierarchy reasons. Dialog works independently to enhance focus trapping */
  );
}
