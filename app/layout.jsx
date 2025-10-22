import "./globals.css";
import Providers from "./providers";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";

export const metadata = {
  title: {
    default: "ISAC - Indian Student Association Cottbus",
    template: "%s | ISAC",
  },
  description:
    "Indian Student Association Cottbus (ISAC) at BTU Cottbus-Senftenberg - Events, Community, and Support.",
  keywords: ["ISAC", "Indian Student Association", "BTU Cottbus", "Cottbus-Senftenberg", "Students", "Events", "Community"],
  metadataBase: new URL("https://isacottbus-btu.web.app"),
  openGraph: {
    title: "ISAC - Indian Student Association Cottbus",
    description:
      "Join ISAC for cultural events, networking, and student support at BTU Cottbus-Senftenberg.",
    url: "https://isacottbus-btu.web.app",
    siteName: "ISAC",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ISAC - Indian Student Association Cottbus",
    description:
      "Join ISAC for cultural events, networking, and student support at BTU Cottbus-Senftenberg.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  themeColor: "#FF9933",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-text-primary antialiased">
        <Providers>
          <div className="flex min-h-screen flex-col bg-white">
            <Navbar />
            <main className="w-full grow">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
