"use client";

import Link from "next/link";
import Image from "next/image";
import { SOCIAL_LINKS } from "../_lib/constants";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/events", label: "Events", icon: "pi-calendar" },
    { href: "/gallery", label: "Gallery", icon: "pi-images" },
    { href: "/teams", label: "Teams", icon: "pi-users" },
    { href: "/resources", label: "Resources", icon: "pi-book" },
    { href: "/sponsor", label: "Sponsor", icon: "pi-heart" },
  ];

  const resourceLinks = [
    { href: "/resources/admission-procedure", label: "Admission Procedure" },
    { href: "/resources/accommodation", label: "Finding Accommodation" },
    { href: "/resources/city-registration", label: "City Registration" },
    { href: "/resources/bank-account", label: "Bank Account" },
    { href: "/resources/reaching-cottbus", label: "Reaching Cottbus" },
    { href: "/resources/emergency-contacts", label: "Emergency Contacts" },
  ];

  const socialLinks = Object.values(SOCIAL_LINKS);

  return (
    <footer className="bg-slate-900 text-gray-100 border-t-4 border-india-saffron">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 mb-10">
          {/* Brand Section */}
          <section className="space-y-6">
            <Link href="/" className="inline-block hover:opacity-90 transition-opacity duration-300">
              <Image
                src="/images/logo.png"
                alt="ISAC Logo"
                width={120}
                height={75}
                className="h-16 w-auto"
                priority
              />
            </Link>
            <div>
              <p className="text-gray-300 text-sm font-bold leading-relaxed">
                Indian Student Association Cottbus
              </p>
              <p className="text-gray-400 text-xs mt-3">BTU Cottbus-Senftenberg</p>
              <div className="border-t border-slate-700 mt-6 pt-6">
                <p className="text-xs font-semibold text-gray-300">
                  Connecting Indians & Germans 🇮🇳🇩🇪
                </p>
              </div>
            </div>
          </section>

          {/* Quick Links */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-7 rounded-full bg-india-saffron"></div>
              <h4 className="text-gray-100 font-bold text-sm uppercase tracking-wider">
                Quick Links
              </h4>
            </div>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 transition-all duration-300 hover:text-india-saffron hover:translate-x-1 flex items-center gap-2 group text-sm"
                  >
                    <i className={`pi ${link.icon} text-xs group-hover:translate-x-1 transition-transform`}></i>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Resources */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-7 rounded-full bg-germany-red"></div>
              <h4 className="text-gray-100 font-bold text-sm uppercase tracking-wider">
                Resources
              </h4>
            </div>
            <ul className="space-y-4">
              {resourceLinks.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 transition-all duration-300 hover:text-germany-red hover:translate-x-1 flex items-center gap-2 group text-sm"
                  >
                    <i className="pi pi-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Community & Social */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-7 rounded-full bg-india-green"></div>
              <h4 className="text-gray-100 font-bold text-sm uppercase tracking-wider">
                Community
              </h4>
            </div>
            <p className="text-gray-300 text-sm mb-8 leading-relaxed font-medium">
              Connect with us on social media to stay updated.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.href}
                  icon={`pi ${social.icon}`}
                  className="p-button-rounded p-button-text hover:bg-india-saffron hover:text-white transition-all duration-300 text-xl"
                  onClick={() => window.open(social.href, "_blank")}
                  title={social.label}
                  aria-label={social.label}
                />
              ))}
            </div>
          </section>
        </div>

        <Divider className="my-6 bg-slate-700" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} Indian Student Association Cottbus. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <Link href="/" className="text-gray-400 transition-colors duration-300 hover:text-india-saffron font-medium">
              Home
            </Link>
            <Link href="/resources" className="text-gray-400 transition-colors duration-300 hover:text-india-saffron font-medium">
              Resources
            </Link>
            <Link href="/teams" className="text-gray-400 transition-colors duration-300 hover:text-india-saffron font-medium">
              Teams
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-slate-700 text-center">
          <p className="text-xs text-gray-500">
            Made with <i className="pi pi-heart text-red-500 inline-block mx-1"></i> by ISAC Team | BTU Cottbus-Senftenberg | Designed by{" "}
            <a
              href="https://binaypradhan.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 transition-colors font-medium"
            >
              Binay Pradhan
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
