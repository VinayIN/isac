"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAVIGATION, SOCIAL_LINKS } from "../_lib/constants";

const RESOURCE_LINKS = [
  { slug: "admission-procedure", label: "Admission Procedure" },
  { slug: "accommodation", label: "Finding Accommodation" },
  { slug: "city-registration", label: "City Registration" },
  { slug: "bank-account", label: "Opening a Bank Account" },
  { slug: "reaching-cottbus", label: "Reaching Cottbus" },
  { slug: "emergency-contacts", label: "Emergency Contacts" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  const start = (
    <Link href="/" className="flex items-center shrink-0">
      <Image
        src="/images/logo.png"
        alt="ISAC Logo"
        width={100}
        height={60}
        priority
        className="h-12 md:h-14 w-auto"
      />
    </Link>
  );

  const end = (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-2 lg:gap-4">
        {NAVIGATION.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`px-3 lg:px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md whitespace-nowrap ${
              isActive(link.href)
                ? "text-orange-400 bg-slate-800 font-semibold"
                : "text-gray-300 hover:text-orange-400 hover:bg-slate-800"
            }`}
          >
            {link.label}
          </Link>
        ))}

        {/* Resources Dropdown */}
        <div className="relative group">
          <button className="px-3 lg:px-4 py-2 text-sm font-medium text-gray-300 hover:text-orange-400 rounded-md hover:bg-slate-800 transition-all duration-200 flex items-center gap-2 whitespace-nowrap">
            <span>Resources</span>
            <svg
              className="w-4 h-4 transition-transform group-hover:rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>

          {/* Dropdown Menu */}
          <div className="absolute left-0 mt-0 w-56 bg-slate-800 rounded-lg shadow-lg border border-slate-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50">
            {RESOURCE_LINKS.map((resource) => (
              <Link
                key={resource.slug}
                href={`/resources/${resource.slug}`}
                className="block px-4 py-2.5 text-sm text-gray-300 hover:text-orange-400 hover:bg-slate-700 transition-colors duration-150"
              >
                {resource.label}
              </Link>
            ))}
            <div className="border-t border-slate-700 mt-2 pt-2">
              <Link
                href="/resources"
                className="block px-4 py-2.5 text-sm text-orange-400 hover:text-orange-300 hover:bg-slate-700 transition-colors duration-150 font-semibold"
              >
                View All Resources
              </Link>
            </div>
          </div>
        </div>

        {/* Social Links Dropdown */}
        <div className="relative group">
          <button className="px-3 lg:px-4 py-2 text-sm font-medium text-gray-300 hover:text-orange-400 rounded-md hover:bg-slate-800 transition-all duration-200 flex items-center gap-2 whitespace-nowrap">
            <span>Connect</span>
            <svg
              className="w-4 h-4 transition-transform group-hover:rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>

          {/* Dropdown Menu */}
          <div className="absolute right-0 mt-0 w-48 bg-slate-800 rounded-lg shadow-lg border border-slate-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50">
            {Object.values(SOCIAL_LINKS).map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2.5 text-sm text-gray-300 hover:text-orange-400 hover:bg-slate-700 transition-colors duration-150"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-300 hover:bg-slate-800 transition-colors duration-200"
        aria-label="Toggle mobile menu"
      >
        {mobileMenuOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-800 border-b border-slate-700 shadow-lg">
          <nav className="flex flex-col p-4 gap-2">
            {NAVIGATION.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive(link.href)
                    ? "text-orange-400 bg-slate-700 font-semibold"
                    : "text-gray-300 hover:text-orange-400 hover:bg-slate-700"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Resources Submenu */}
            <div className="px-4 py-3">
              <p className="text-xs font-semibold text-gray-400 uppercase mb-2">Resources</p>
              <div className="flex flex-col gap-1 pl-2 border-l-2 border-slate-700">
                {RESOURCE_LINKS.map((resource) => (
                  <Link
                    key={resource.slug}
                    href={`/resources/${resource.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm text-gray-300 hover:text-orange-400 py-1.5 transition-colors duration-150"
                  >
                    {resource.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Social Links */}
            <div className="border-t border-slate-700 mt-2 pt-2">
              <p className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase">
                Connect
              </p>
              <div className="flex gap-2 px-4">
                {Object.values(SOCIAL_LINKS).map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-3 py-2.5 text-sm font-medium text-gray-300 bg-slate-700 hover:bg-slate-600 hover:text-orange-400 rounded-lg transition-colors duration-200 text-center"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );

  return (
    <header className="sticky top-0 z-40 w-full bg-slate-900 border-b border-slate-800 shadow-sm">
      <div className="flex items-center justify-between h-14 md:h-16 px-4 md:px-6 lg:px-8">
        {start}
        {end}
      </div>
    </header>
  );
}