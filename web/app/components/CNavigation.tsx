"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  {
    href: "/dashboard",
    label: "Dashboard",
  },
  {
    href: "/template",
    label: "Template",
  },
];

export default function CNavigation() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <div className="bg-blue-100 p-5">
      {navLinks.map((el) => (
        <Link
          key={el.href}
          className={`px-4 ${
            isActive(el.href) ? "text-blue-500" : "text-black"
          }`}
          href={el.href}
        >
          {el.label}
        </Link>
      ))}
    </div>
  );
}
