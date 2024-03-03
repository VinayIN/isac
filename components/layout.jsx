import Head from 'next/head'
import Navbar from './navbar'
import Footer from './footer'
<<<<<<< HEAD
=======
import React, { Suspense, lazy } from 'react';

const GreetingDialog = lazy(() => import('./greeting'));
>>>>>>> new_ui

export default function Layout({ children }) {
  return (
    <>
    <Head>
      <title>ISAC</title>
      <meta name="description" content="Indian Student Association Cottbus" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
<<<<<<< HEAD
    <Navbar />
    <div>{children}</div>
    <Footer />
=======
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
>>>>>>> new_ui
    </>
  )
}