import React from "react";
import Link from "next/link";

// interface LoginButtonProps {
//   href: string;
//   label: string;
// }

// export const LoginButton: React.FC<LoginButtonProps> = ({ href, label }) => {
//   return (
//     <div className="py-6">
//       <Link
//         href={href}
//         className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
//       >
//         {label}
//       </Link>
//     </div>
//   );
// };

export const MobileDialogLogin = () => {
  return (
    <div className="py-6">
      <Link
        href="#"
        className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
      >
        Log in
      </Link>
    </div>
  );
};

export const NavbarLogin = () => {
  return (
    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
      <Link href="#" className="text-sm/6 font-semibold text-gray-900">
        Log in <span aria-hidden="true">&rarr;</span>
      </Link>
    </div>
  );
};
