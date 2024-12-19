"use client";
import React, { useState } from "react";
import { Logo } from "@/components/logo";
import DesktopNavigation from "@/components/desktop-navigation";
import MobileMenu from "@/components/mobile-menu";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { callsToAction, company, products } from "@/utils/data";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigationData = { products, callsToAction, company };
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const NAV_CLASSES =
    "mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8";
  const BUTTON_CLASSES =
    "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700";
  const SCREEN_READER_TEXT = "Open main menu";

  return (
    <header className="bg-white">
      <nav aria-label="Global" className={NAV_CLASSES}>
        <div className="flex lg:flex-1">
          <Logo />
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={toggleMobileMenu}
            className={BUTTON_CLASSES}
          >
            <span className="sr-only">{SCREEN_READER_TEXT}</span>
            <Bars3Icon aria-hidden="true" className="size-6 h-6 w-6" />
          </button>
        </div>
        <DesktopNavigation {...navigationData} />
      </nav>
      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        {...navigationData}
      />
    </header>
  );
}
