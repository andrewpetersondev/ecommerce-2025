"use client";
import React, { useState } from "react";
import { NavbarLogo } from "@/components/logo";
import DesktopNavigation from "@/components/desktop-navigation";
import MobileMenu from "@/components/mobile-menu";
import { callsToAction, company, products } from "@/utils/data";
import MobileBarsIcon from "@/components/mobile-bars-icon";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigationData = { products, callsToAction, company };
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const NAV_CLASSES =
    "mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8";

  return (
    <header className="bg-white">
      {/* Global navigation container */}
      <nav aria-label="Global" className={NAV_CLASSES}>
        <NavbarLogo />

        {/* Mobile menu toggle: only visible on small screens */}
        <MobileBarsIcon toggleMobileMenu={toggleMobileMenu} />

        {/* Desktop Navigation: visible only on larger screens */}
        <DesktopNavigation {...navigationData} />
      </nav>
      {/* Mobile Menu: rendered conditionally when toggled */}

      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        {...navigationData}
      />
    </header>
  );
}
