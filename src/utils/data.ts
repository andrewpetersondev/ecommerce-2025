import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";
import { PhoneIcon, PlayCircleIcon } from "@heroicons/react/20/solid";
import { CallToAction, Company, Product } from "@/utils/interfaces";

export const products: Product[] = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "/product/analytics",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "/product/engagement",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "/product/security",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "/product/integrations",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "/product/automations",
    icon: ArrowPathIcon,
  },
];

export const callsToAction: CallToAction[] = [
  { name: "Watch demo", href: "/product/watch-demo", icon: PlayCircleIcon },
  { name: "Contact sales", href: "/product/contact-sales", icon: PhoneIcon },
];

export const company: Company[] = [
  { name: "About us", href: "/company/about-us" },
  { name: "Careers", href: "/company/careers" },
  { name: "Support", href: "/company/support" },
  { name: "Press", href: "/company/press" },
  { name: "Blog", href: "/company/blog" },
];