import React from "react";
import {
  Popover,
  PopoverBackdrop,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { CallToAction, Company, Product } from "@/utils/interfaces";
import { NavbarLogin } from "@/components/login-button";
import {
  NavbarPopoverCompanyLink,
  NavbarPopoverCTA,
  NavbarPopoverProductLink,
} from "@/components/navbar-popover-link";

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

          <PopoverBackdrop
            transition
            className="fixed inset-0 bg-black/15 transition duration-100 ease-out data-[closed]:opacity-0"
          />

          {/* PopoverPanel containing product links and actions */}
          <PopoverPanel
            transition
            className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5 transition duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
          >
            <div className="p-4">
              {/* Mapping through product items */}
              {products.map((product, index) => (
                <NavbarPopoverProductLink
                  key={`${product.name}--${index}`}
                  product={product}
                />
              ))}
            </div>
            {/* Divided actions displayed under products */}
            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
              {callsToAction.map((cta, index) => (
                <NavbarPopoverCTA key={`${cta.name}--${index}`} cta={cta} />
              ))}
            </div>
          </PopoverPanel>
        </Popover>

        {/* Simple navigation links */}
        <Link
          href="/features"
          className="text-sm/6 font-semibold text-gray-900"
        >
          Features
        </Link>
        <Link
          href="/marketplace"
          className="text-sm/6 font-semibold text-gray-900"
        >
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

          <PopoverBackdrop
            transition
            className="fixed inset-0 bg-black/15 transition duration-100 ease-out data-[closed]:opacity-0"
          />
          {/* PopoverPanel containing company links */}
          <PopoverPanel className="absolute top-full -left-8 z-10 mt-3 w-56 rounded-xl bg-white p-2 ring-1 shadow-lg ring-gray-900/5">
            <div className="p-4">
              {/* Mapping through company links */}
              {company.map((item, index) => (
                <NavbarPopoverCompanyLink
                  key={`${item.name}--${index}`}
                  item={item}
                />
              ))}
            </div>
          </PopoverPanel>
        </Popover>
      </PopoverGroup>

      {/* Right-aligned section */}
      <NavbarLogin />
    </>
  );
}
