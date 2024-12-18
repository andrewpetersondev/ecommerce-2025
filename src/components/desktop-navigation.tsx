import React from "react";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  PopoverGroup,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { Product, CallToAction, Company } from "@/utils/interfaces"; // Define types in a dedicated types file

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
      <PopoverGroup className="hidden lg:flex lg:gap-x-12">
        {/* Product Popover */}
        <Popover className="relative">
          <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
            Product
            <ChevronDownIcon
              aria-hidden="true"
              className="size-5 flex-none text-gray-400"
            />
          </PopoverButton>
          <PopoverPanel className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5">
            <div className="p-4">
              {products.map((item) => (
                <div
                  key={item.name}
                  className="group relative flex gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                >
                  <div className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <item.icon
                      aria-hidden="true"
                      className="size-6 text-gray-600 group-hover:text-indigo-600"
                    />
                  </div>
                  <div className="flex-auto">
                    <Link
                      href={item.href}
                      className="block font-semibold text-gray-900"
                    >
                      {item.name}
                      <span className="absolute inset-0" />
                    </Link>
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
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

        <Link href="#" className="text-sm/6 font-semibold text-gray-900">
          Features
        </Link>
        <Link href="#" className="text-sm/6 font-semibold text-gray-900">
          Marketplace
        </Link>

        {/* Company Popover */}
        <Popover className="relative">
          <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
            Company
            <ChevronDownIcon
              aria-hidden="true"
              className="size-5 flex-none text-gray-400"
            />
          </PopoverButton>
          <PopoverPanel className="absolute top-full -left-8 z-10 mt-3 w-56 rounded-xl bg-white p-2 ring-1 shadow-lg ring-gray-900/5">
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
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <Link href="#" className="text-sm/6 font-semibold text-gray-900">
          Log in <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </>
  );
}
