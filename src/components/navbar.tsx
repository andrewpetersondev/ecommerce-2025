"use client";
import React, { useState } from "react";
import { Logo } from "@/components/logo";
import DesktopNavigation from "@/components/desktop-navigation";
import MobileMenu from "@/components/mobile-menu";
import { callsToAction, company, products } from "@/utils/data";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Logo />
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        <DesktopNavigation
          products={products}
          callsToAction={callsToAction}
          company={company}
        />
      </nav>
      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        products={products}
        callsToAction={callsToAction}
        company={company}
      />
    </header>
  );
}
