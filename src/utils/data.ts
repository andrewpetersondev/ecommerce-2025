import React from "react";

import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";
import { PhoneIcon, PlayCircleIcon } from "@heroicons/react/20/solid";

interface Product {
  name: string;
  description: string;
  href: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const products: Product[] = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];

interface CallToAction {
  name: string;
  href: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const callsToAction: CallToAction[] = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

interface Company {
  name: string;
  href: string;
}

export const company: Company[] = [
  { name: "About us", href: "#" },
  { name: "Careers", href: "#" },
  { name: "Support", href: "#" },
  { name: "Press", href: "#" },
  { name: "Blog", href: "#" },
];
