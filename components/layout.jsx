import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>ISAC - Indian Student Association Cottbus</title>
        <meta
          name="description"
          content="Indian Student Association Cottbus (ISAC) at BTU Cottbus-Senftenberg - Events, Community, and Support"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1f2937" />
        <meta
          property="og:title"
          content="ISAC - Indian Student Association Cottbus"
        />
        <meta
          property="og:description"
          content="Join ISAC for cultural events, networking, and student support at BTU Cottbus-Senftenberg"
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />

        <main className="flex-grow w-full text-text-primary">{children}</main>

        <Footer />
      </div>
    </>
  );
}
