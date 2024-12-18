import React from "react";
import Link from "next/link";

interface LoginButtonProps {
  href: string;
  label: string;
}

const LoginButton: React.FC<LoginButtonProps> = ({ href, label }) => {
  return (
    <div className="py-6">
      <Link
        href={href}
        className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
      >
        {label}
      </Link>
    </div>
  );
};

export default LoginButton;
