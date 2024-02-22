import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
import Link from "next/link";
const Footer = () => {
      

    return (
      <Card className="p-mt-4 px-4">
        <div className="footer p-mt-4 flex flex-row align-items-start justify-content-between">
          <div className="p-text-center information" >
          <Image src="/images/logo.png" alt="Logo" className="footer-logo" width='150px'/>
           
            <div>Indian Students Association Cottbus (ISAC)</div>
            <div>BTU (Cottbus-Seftenberg)</div>
            <div>Copyright © 2023</div><div>All Rights Reserved.</div>

          </div>
          <div className="contact-us">
          <div className='flex-auto space-x-2 text-sm text-gray-500 dark:text-gray-400 justify-content-center'>
          <h2>Join us on our growth journey</h2>
            <div className='flex justify-content-between mx-8'>
              <Link href="https://www.facebook.com/isacottbus/" target="_blank"><i className="pi pi-facebook" style={{'fontSize': '1.5em'}}></i></Link>
              <Link href="https://www.instagram.com/isac_cottbus/" target="_blank"><i className="pi pi-instagram" style={{'fontSize': '1.5em'}}></i></Link>
              <Link href="https://github.com/VinayIN/isac" target="_blank"><i className="pi pi-github" style={{'fontSize': '1.5em'}}></i></Link>
            </div>
          </div>
          </div>
          <div className='devloper-contribution'>
            <div className='flex-auto space-x-2 text-sm text-gray-500 dark:text-gray-400'>
                <div>
                  <h2>Developers:</h2> 
                  <div className='developer-list flex flex-column'>
                    <Link href="https://wezn.github.io/" target='_blank'><i className="pi pi-globe px-2 py-1"/>Binay Kumar Pradhan</Link>
                    <Link href="https://github.com/jagruti261" target='_blank'><i className="pi pi-github px-2 py-1"/>Jagruti Vekariya</Link>
                    </div>
                  </div>
            </div>
          </div>
        </div>
        </Card>
        
    );
};

export default Footer;