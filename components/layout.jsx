import Head from 'next/head';
import Navbar from './navbar';
import Footer from './footer';


export default function Layout({ children }) {
  return (
    <>
    <Head>
      <title>ISAC</title>
      <meta name="description" content="Indian Student Association Cottbus" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <nav>
      <Navbar />
    </nav>
    <main>
      {children}
    </main>
    <footer>
      <Footer />
    </footer>
    </>
  )
}