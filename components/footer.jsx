import Link from "next/link";
import Image from "next/image";

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
    { href: "/resources/accommodation", label: "Accommodation" },
    { href: "/resources/city-registration", label: "City Registration" },
    { href: "/resources/bank-account", label: "Bank Account" },
    { href: "/resources/reaching-cottbus", label: "Reaching Cottbus" },
    { href: "/resources/emergency-contacts", label: "Emergency Contacts" },
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
    <footer
      className="text-gray-300 border-t border-gray-800"
      style={{
        background:
          "linear-gradient(to bottom, #000000 0%, #D00000 45%, #FFCE00 100%)",
      }}
    >
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-18">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Section */}
          <section className="space-y-4">
            <Link
              href="/"
              className="inline-block hover:opacity-90 transition-opacity duration-300"
            >
              <Image
                src="/images/logo.png"
                alt="ISAC Logo"
                width={120}
                height={75}
                className="h-14 w-auto"
                priority
              />
            </Link>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">ISAC</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Indian Student Association Cottbus
              </p>
              <p className="text-gray-500 text-xs mt-2">
                BTU Cottbus-Senftenberg
              </p>
              <div className="border-t border-gray-700 mt-4 pt-4">
                <p className="text-india-saffron text-xs font-semibold">
                  Connecting Indians in BTU Cottbus-Senftenberg, Germany 🇮🇳🇩🇪
                </p>
              </div>
            </div>
          </section>

          {/* Quick Links */}
          <section>
            <h4 className="flex items-center gap-2 text-white font-bold mb-5 text-sm uppercase tracking-wide">
              <span className="w-1 h-5 rounded-full bg-india-saffron"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-india-saffron transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <i
                      className={`pi ${link.icon} text-xs group-hover:translate-x-1 transition-transform`}
                    ></i>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Resources */}
          <section>
            <h4 className="flex items-center gap-2 text-white font-bold mb-5 text-sm uppercase tracking-wide">
              <span className="w-1 h-5 rounded-full bg-germany-red"></span>
              Resources
            </h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-india-saffron transition-colors duration-300 text-sm flex items-center gap-2 group"
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
            <h4 className="flex items-center gap-2 text-white font-bold mb-5 text-sm uppercase tracking-wide">
              <span className="w-1 h-5 rounded-full bg-india-green"></span>
              Community
            </h4>
            <p className="text-gray-400 text-sm mb-5 leading-relaxed">
              Connect with us on social media to stay updated with events and
              announcements.
            </p>
            <div className="flex gap-5">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className="text-gray-400 hover:text-india-saffron transition-all duration-300 text-xl hover:scale-125 transform"
                >
                  <i className={`pi ${social.icon}`}></i>
                </a>
              ))}
            </div>
          </section>
        </div>

        {/* Divider */}
        <div className="h-px my-10 lg:my-12 w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-500">
              &copy; {currentYear} Indian Student Association Cottbus. All
              rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <Link
              href="/"
              className="text-gray-400 hover:text-india-saffron transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="/resources"
              className="text-gray-400 hover:text-india-saffron transition-colors duration-300"
            >
              Resources
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div
        className="py-4 px-4 text-center border-t border-gray-700"
        style={{ background: "rgba(0, 0, 0, 0.4)" }}
      >
        <p className="text-xs text-gray-500">
          Made with <span className="text-india-saffron font-bold">❤</span> by
          ISAC | BTU Cottbus-Senftenberg
        </p>
      </div>
    </footer>
  );
}
