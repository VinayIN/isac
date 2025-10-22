"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAVIGATION, SOCIAL_LINKS } from "../lib/constants";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === "/") return pathname === "/";

    return pathname?.startsWith(href);
  };

  const navLinks = NAVIGATION;
  const socialLinks = Object.values(SOCIAL_LINKS);

  // Convert navigation to menubar format
  const menuItems = navLinks.map((link) => ({
    label: link.label,
    icon: `pi ${link.icon}`,
    template: () => (
      <Link
        href={link.href}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
          isActive(link.href)
            ? "bg-gradient-india text-white shadow-medium"
            : "text-text-primary hover:bg-india-saffron/10 hover:text-primary"
        }`}
      >
        <i className={`pi ${link.icon} text-sm`}></i>
        <span>{link.label}</span>
      </Link>
    ),
  }));

  const start = (
    <Link href="/" className="flex items-center group">
      <Image
        src="/images/logo.png"
        alt="ISAC Logo"
        width={100}
        height={60}
        priority
        className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
      />
    </Link>
  );

  const end = (
    <div className="flex items-center gap-2">
      {socialLinks.map((social) => (
        <Button
          key={social.href}
          icon={`pi ${social.icon}`}
          className="p-button-rounded p-button-text hover:bg-india-saffron/10"
          onClick={() => window.open(social.href, "_blank")}
          aria-label={social.label}
        />
      ))}
    </div>
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-soft border-b-4 border-india-saffron">
      <Menubar
        model={menuItems}
        start={start}
        end={end}
        className="border-none !rounded-none py-2 px-6 bg-white w-full"
      />
    </header>
  );
}
