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

export default Footer;