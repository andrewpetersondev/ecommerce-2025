import Link from "next/link";
import React from "react";
import { CallToAction, Company, Product } from "@/utils/interfaces";

interface Props {
  product: Product;
}

export function NavbarPopoverProductLink({ product }: Props) {
  const { name, description, href } = product;
  return (
    <div
      key={name}
      className="group relative flex gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
    >
      {/* Product Icon */}
      <div className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
        <product.icon
          aria-hidden="true"
          className="size-6 text-gray-600 group-hover:text-indigo-600"
        />
      </div>
      <div className="flex-auto">
        {/* Product Name (Link) */}
        <Link href={href} className="block font-semibold text-gray-900">
          {name}
          <span className="absolute inset-0" />
        </Link>
        {/* Product Description */}
        <p className="mt-1 text-gray-600">{description}</p>
      </div>
    </div>
  );
}

interface CTAProps {
  cta: CallToAction;
}

export function NavbarPopoverCTA({ cta }: CTAProps) {
  const { name, href } = cta;
  return (
    <Link
      key={name}
      href={href}
      className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
    >
      <cta.icon aria-hidden="true" className="size-5 flex-none text-gray-400" />
      {name}
    </Link>
  );
}

interface CProps {
  item: Company;
}

export function NavbarPopoverCompanyLink({ item }: CProps) {
  const { name, href } = item;
  return (
    <Link
      key={name}
      href={href}
      className="block rounded-lg px-3 py-2 text-sm/6 font-semibold text-gray-900 hover:bg-gray-50"
    >
      {name}
    </Link>
  );
}
