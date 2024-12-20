import React from "react";
import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="#" className="-m-1.5 p-1.5">
      <span className="sr-only">Your Company</span>
      <Image
        alt="Your Company"
        width={600}
        height={600}
        src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
        className="h-8 w-auto"
      />
    </Link>
  );
}

export function NavbarLogo() {
  return (
    <div className="flex lg:flex-1">
      <Link href="/" className="-m-1.5 p-1.5">
        <span className="sr-only">Your Company</span>
        <Image
          alt="Your Company"
          width={600}
          height={600}
          src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
          className="h-8 w-auto"
        />
      </Link>
    </div>
  );
}

export function DialogPanelLogo() {
  return (
    <Link href="#" className="-m-1.5 p-1.5">
      <span className="sr-only">Your Company</span>
      <Image
        alt="Your Company"
        width={600}
        height={600}
        src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
        className="h-8 w-auto"
      />
    </Link>
  );
}
