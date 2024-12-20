import { DisclosureButton } from "@headlessui/react";
import React from "react";
import { CallToAction, Product } from "@/utils/interfaces";

interface Props {
  item: Product | CallToAction;
}

export function MobileMenuDisclosureProductButton({ item }: Props) {
  return (
    <DisclosureButton
      key={`${item.name}--${item}`}
      as="a"
      href={item.href}
      className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
    >
      {item.name}
    </DisclosureButton>
  );
}
