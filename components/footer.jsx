import Link from 'next/link'
function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center ">
        <div className="mb-3 flex-auto space-x-4">
          <h3></h3>
        </div>
        <div className="mb-2 flex flex-column flex-auto space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>Copyright © 2023, All Rights Reserved.</div>
          <div>Indian Students Association Cottbus (ISAC)</div>
          <div>BTU (Cottbus-Seftenberg)</div>
        </div>
        <div className='flex-auto space-x-2 text-sm text-gray-500 dark:text-gray-400'>
            <div>Developed by: <mark>Binay Kumar Pradhan</mark></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;