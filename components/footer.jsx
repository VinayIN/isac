<<<<<<< HEAD
import Link from 'next/link'
function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center ">
        <div className="mb-3 flex-auto space-x-4">
          <h3></h3>
        </div>
        <div className="mb-2 flex flex-column flex-auto space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>Copyright © 2023</div>
          <div>Indian Students Association Cottbus (ISAC)</div>
          <div>BTU (Cottbus-Seftenberg)</div>
          <div>All Rights Reserved.</div>
        </div>
        <div className='flex-auto space-x-2 text-sm text-gray-500 dark:text-gray-400'>
            <div>
              Developers:
              <p>
                <Link href="https://github.com/VinayIN/isac" target='_blank'><i className="pi pi-github px-2"/></Link><mark>Binay Kumar Pradhan</mark>
              </p>
              </div>
        </div>
      </div>
    </footer>
  )
}
=======
import React from 'react';
import { Card } from 'primereact/card';
import { Image } from 'primereact/image';
import Link from "next/link";

const Footer = () => {
  return (
    <Card className="flex flex-column align-items-center">
      <div className='flex flex-column align-items-center mb-4'>
        <Link href="/">
          <Image src="/images/logo.png" alt="Logo" width='150px' className='mb-2'/>
        </Link>
        <div className="mb-2 text-muted">Indian Students Association Cottbus (ISAC)</div>
        <div className="mb-2 text-muted">BTU (Cottbus-Seftenberg)</div>
        <div className="mb-2 text-muted">Copyright © 2024</div>
        <div className='mb-2 text-muted'>All Rights Reserved.</div>
      </div>

      <div className="flex justify-content-center gap-4 pb-4">
        <Link href="https://www.facebook.com/isacottbus/" aria-label="Facebook"><i className="pi pi-facebook"></i></Link>
        <Link href="https://www.instagram.com/isac_cottbus/" aria-label="Instagram"><i className="pi pi-instagram"></i></Link>
        <Link href="https://github.com/VinayIN/isac" aria-label="GitHub"><i className="pi pi-github"></i></Link>
      </div>

      <div className="flex flex-column align-items-center">
        <p className='text-muted'>
            Disclaimer: This website is intended for informational purposes only. 
            For further clarification or details, please recheck with the BTU administration. 
            Any information present on the official website supersedes what is mentioned here.
        </p>
      </div>
    </Card>
  );
};
>>>>>>> new_ui

export default Footer;