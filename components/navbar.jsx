import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (href) => {
    if (href === "/") return router.pathname === "/";
    return router.pathname.startsWith(href);
  };

  const navLinks = [
    { href: "/", label: "Home", icon: "pi-home" },
    { href: "/events", label: "Events", icon: "pi-calendar" },
    { href: "/gallery", label: "Gallery", icon: "pi-images" },
    { href: "/resources", label: "Resources", icon: "pi-book" },
    { href: "/sponsor", label: "Sponsor", icon: "pi-heart" },
    { href: "/teams", label: "Teams", icon: "pi-users" },
  ];

  const socialLinks = [
    {
      href: "https://chat.whatsapp.com/EMtoCcEhDWmHgwGThM3FDK",
      icon: "pi-whatsapp",
      label: "WhatsApp",
    },
    {
      href: "https://www.facebook.com/groups/BTUIndians/",
      icon: "pi-facebook",
      label: "Facebook",
    },
    {
      href: "https://www.instagram.com/isac_cottbus/",
      icon: "pi-instagram",
      label: "Instagram",
    },
  ];

  return (
    <header
      className="sticky top-0 z-50 bg-white shadow-md border-b-4 border-transparent"
      style={{
        borderImage:
          "linear-gradient(90deg, #FF9933 0%, #138808 33%, #000000 66%, #FFCE00 100%) 0 0 1 0",
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="shrink-0 flex items-center group">
            <Image
              src="/images/logo.png"
              alt="ISAC Logo"
              width={100}
              height={60}
              priority
              className="transition-transform duration-300 group-hover:scale-105 h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-2">
            {/* Main Links */}
            <ul className="flex gap-0">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                      isActive(link.href)
                        ? "text-white bg-orange-500"
                        : "text-gray-700 hover:text-orange-500"
                    }`}
                  >
                    <i className={`pi ${link.icon} text-sm`}></i>
                    <span className="hidden sm:inline">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="flex gap-3 border-l border-gray-200 pl-4 ml-4">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-gray-600 transition-colors duration-300 hover:text-orange-500 text-lg hover:scale-110 transform"
                  title={social.label}
                >
                  <i className={`pi ${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:bg-orange-50 transition-colors duration-300"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <i
              className={`pi text-xl transition-transform duration-300 ${
                isOpen ? "pi-times" : "pi-bars"
              }`}
            ></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-1 border-t border-gray-200 mt-2 max-h-96 overflow-y-auto">
            {/* Main Navigation */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium text-sm transition-all duration-300 ${
                  isActive(link.href)
                    ? "text-white bg-orange-500"
                    : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                }`}
              >
                <i className={`pi ${link.icon} text-sm`}></i>
                {link.label}
              </Link>
            ))}

            {/* Social Links */}
            <details className="group">
              <summary className="cursor-pointer text-gray-700 px-4 py-3 rounded-lg font-medium transition-colors duration-300 hover:text-orange-500 hover:bg-orange-50 flex items-center gap-2">
                <i className="pi pi-share-alt text-sm"></i>
                <span>Follow Us</span>
                <i className="pi pi-chevron-right text-xs ml-auto group-open:rotate-90 transition-transform"></i>
              </summary>
              <div className="pl-4 space-y-1 mt-2 border-l-2 border-orange-500">
                {socialLinks.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 px-4 py-2 text-sm rounded hover:bg-orange-50 hover:text-orange-600 transition-colors duration-300"
                  >
                    <i className={`pi ${social.icon}`}></i>
                    {social.label}
                  </a>
                ))}
              </div>
            </details>
          </div>
        )}
      </nav>
    </header>
  );
}
