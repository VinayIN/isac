import Head from 'next/head'
import Navbar from './navbar'
import Footer from './footer'
import React, { Suspense, lazy } from 'react';

const GreetingDialog = lazy(() => import('./greeting'));

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
    <Suspense fallback={<div>Loading...</div>}>
      <GreetingDialog />
    </Suspense>
      {children}
    </main>
    <footer>
      <Footer />
    </footer>
    </>
  )
}