import React from "react";

// export interface Product {
//   name: string;
//   description: string;
//   icon: React.ElementType;
//   href: string;
// }

export interface Product {
  name: string;
  description: string;
  href: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

// export interface CallToAction {
//   name: string;
//   icon: React.ElementType;
//   href: string;
// }

export interface CallToAction {
  name: string;
  href: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface Company {
  name: string;
  href: string;
}
