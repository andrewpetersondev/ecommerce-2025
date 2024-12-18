import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import NavItemSubMenu from "./NavItemSubMenu";
import { callsToAction } from "../../utils/data";

export default function NavItem({ ...props }) {
  console.log(props);
  const { name, href, current, subNavigation } = props;
  console.log(href);
  console.log(current);
  return (
    <PopoverGroup className="hidden lg:flex lg:gap-x-12">
      <Popover className="relative">
        <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-white">
          {name}
          <ChevronDownIcon
            aria-hidden="true"
            className="size-5 flex-none text-white"
          />
        </PopoverButton>

        <PopoverPanel
          transition
          className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
        >
          <div className="p-4">
            {subNavigation.map((item) => (
              <NavItemSubMenu key={item.category} {...item} />
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
    </PopoverGroup>
  );
}
