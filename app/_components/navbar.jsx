"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAVIGATION, SOCIAL_LINKS } from "../_lib/constants";
import { Menubar } from "primereact/menubar";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  // Create menu items for navigation
  const menuItems = NAVIGATION.map((link) => ({
    label: link.label,
    url: link.href,
    className: `text-sm font-semibold transition-colors duration-200 ${
      isActive(link.href) ? "text-orange-500" : "text-gray-600 hover:text-orange-500"
    }`,
  }));

  // Social media dropdown
  const socialItems = Object.values(SOCIAL_LINKS).map((social) => ({
    label: social.label,
    icon: `pi ${social.icon}`,
    command: () => window.open(social.href, "_blank"),
    className: "text-gray-700 hover:text-orange-500",
  }));

  menuItems.push({
    label: "Connect",
    icon: "pi pi-share-alt",
    items: socialItems,
    className: "text-sm font-semibold text-gray-600 hover:text-orange-500",
  });

  const start = (
    <Link href="/" className="flex items-center shrink-0">
      <Image
        src="/images/logo.png"
        alt="ISAC Logo"
        width={100}
        height={60}
        priority
        className="h-14 w-auto"
      />
    </Link>
  );

  const end = (
    <Menubar
      model={menuItems}
      className="bg-transparent border-0 p-0 m-0"
      pt={{
        root: { className: "bg-transparent border-0 p-0 m-0" },
        menu: { className: "flex gap-0 bg-transparent border-0 p-0 m-0" },
        menuitem: { className: "relative m-0 p-0" },
        action: {
          className:
            "px-4 py-2 text-sm font-semibold transition-colors duration-200 rounded-md hover:bg-orange-50 text-gray-600 hover:text-orange-500",
        },
        submenu: {
          className:
            "bg-white border border-gray-200 rounded-lg mt-2 p-2 min-w-[180px] shadow-lg",
        },
        submenuitem: {
          className: "text-gray-700 hover:text-orange-500",
        },
      }}
    />
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <nav className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {start}
          {end}
        </div>
      </nav>
    </header>
  );
}