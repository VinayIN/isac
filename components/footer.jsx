// import Link from 'next/link'
// function Footer() {
//   return (
//     <footer>
//       <div className="mt-16 flex flex-col items-center ">
//         <div className="mb-3 flex-auto space-x-4">
//           <h3></h3>
//         </div>
//         <div className="mb-2 flex flex-column flex-auto space-x-2 text-sm text-gray-500 dark:text-gray-400">
//           <div>Copyright © 2023</div>
//           <div>Indian Students Association Cottbus (ISAC)</div>
//           <div>BTU (Cottbus-Seftenberg)</div>
//           <div>All Rights Reserved.</div>
//         </div>
//         <div className='flex-auto space-x-2 text-sm text-gray-500 dark:text-gray-400'>
//             <div>
//               Developers:
//               <p>
//                 <Link href="https://github.com/VinayIN/isac" target='_blank'><i className="pi pi-github px-2"/></Link><mark>Binay Kumar Pradhan</mark>
//               </p>
//               </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer;

import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

import Link from "next/link";
const Footer = () => {
      

    return (
      <Card className="p-mt-4">
        <div className="footer p-mt-4 flex flex-row align-items-start justify-content-between">
            <div className="p-text-center information" >
            
          <div>Indian Students Association Cottbus (ISAC)</div>
          <div>BTU (Cottbus-Seftenberg)</div>
          <div>Copyright © 2023</div><div>All Rights Reserved.</div>
          </div>
          <div className="contact-us">
            <div className='flex-auto space-x-2 text-sm text-gray-500 dark:text-gray-400'>
          <h2>Join us on our growth journey</h2> 
           <a href="mailto:isacottbus@gmail.com" className="no-underline">
                <Button label="Contact Us" icon="pi pi-envelope" className="p-button-text" />
            </a>
            <div className='mx-10'>
            <Link href="https://www.facebook.com/isacottbus/" target="_blank"><i className="pi pi-facebook p-mr-2 mx-10" style={{'fontSize': '1.5em'}}></i></Link>
            <Link href="https://www.youtube.com/" target="_blank"><i className="pi pi-youtube p-mr-2 mx-10" style={{'fontSize': '1.5em'}}></i></Link>
                <Link href="https://www.instagram.com/isac_cottbus/" target="_blank"><i className="pi pi-instagram mx-10" style={{'fontSize': '1.5em'}}></i></Link></div>
        </div>
        </div>
        <div className='devloper-contribustions'>
          <div className='flex-auto space-x-2 text-sm text-gray-500 dark:text-gray-400'>
              <div>
                <h2>Developers:</h2> 
                <div className='developer-list flex flex-column'>
                <Link href="https://github.com/jagruti261" target='_blank'><i className="pi pi-github px-2"/>Jagruti Vekariya</Link>
                  <Link href="https://github.com/VinayIN/isac" target='_blank'><i className="pi pi-github px-2"/>Binay Kumar Pradhan</Link>
                  </div>
                </div>
          </div>
        </div>
        </div>
        </Card>
        
    );
};

export default Footer;
