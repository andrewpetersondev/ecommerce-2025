import React from "react";
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { CallToAction, Company, Product } from "@/utils/interfaces";
import { NavbarLogin } from "@/components/login-button"; // Define types in a dedicated types file

interface Props {
  products: Product[];
  callsToAction: CallToAction[];
  company: Company[];
}

export default function DesktopNavigation({
  products,
  callsToAction,
  company,
}: Props) {
  return (
    <>
      {/* Group of navigation items for desktop */}
      <PopoverGroup className="hidden lg:flex lg:gap-x-12">
        {/* Product Popover: Dropdown displaying products and actions */}
        <Popover className="relative">
          <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
            Product
            {/* Dropdown indicator Icon */}
            <ChevronDownIcon
              aria-hidden="true"
              className="size-5 flex-none text-gray-400"
            />
          </PopoverButton>

          {/* PopoverPanel containing product links and actions */}
          <PopoverPanel className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5">
            <div className="p-4">
              {/* Mapping through product items */}
              {products.map((item) => (
                <div
                  key={item.name}
                  className="group relative flex gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                >
                  {/* Product Icon */}
                  <div className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <item.icon
                      aria-hidden="true"
                      className="size-6 text-gray-600 group-hover:text-indigo-600"
                    />
                  </div>
                  <div className="flex-auto">
                    {/* Product Name (Link) */}
                    <Link
                      href={item.href}
                      className="block font-semibold text-gray-900"
                    >
                      {item.name}
                      <span className="absolute inset-0" />
                    </Link>
                    {/* Product Description */}
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Divided actions displayed under products */}
            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
              {callsToAction.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                >
                  <item.icon
                    aria-hidden="true"
                    className="size-5 flex-none text-gray-400"
                  />
                  {item.name}
                </Link>
              ))}
            </div>
          </PopoverPanel>
        </Popover>

        {/* Simple navigation links */}
        <Link href="#" className="text-sm/6 font-semibold text-gray-900">
          Features
        </Link>
        <Link href="#" className="text-sm/6 font-semibold text-gray-900">
          Marketplace
        </Link>

        {/* Company Popover: Dropdown displaying company links */}
        <Popover className="relative">
          <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
            Company
            {/* Dropdown indicator Icon */}
            <ChevronDownIcon
              aria-hidden="true"
              className="size-5 flex-none text-gray-400"
            />
          </PopoverButton>

          {/* PopoverPanel containing company links */}
          <PopoverPanel className="absolute top-full -left-8 z-10 mt-3 w-56 rounded-xl bg-white p-2 ring-1 shadow-lg ring-gray-900/5">
            {/* Mapping through company links */}
            {company.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-sm/6 font-semibold text-gray-900 hover:bg-gray-50"
              >
                {item.name}
              </Link>
            ))}
          </PopoverPanel>
        </Popover>
      </PopoverGroup>

      {/* Right-aligned section */}
      <NavbarLogin />
    </>
  );
}
