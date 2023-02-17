import Link from 'next/link'
function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center ">
        <div className="mb-3 flex-auto space-x-4">
          <h3></h3>
        </div>
        <div className="mb-2 flex-auto space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>Copyright © 2023, Indian Students Association Cottbus (ISAC), BTU (Cottbus-Seftenberg), All Rights Reserved.</div>
        </div>
        <div className='flex-auto space-x-2 text-sm text-gray-500 dark:text-gray-400'>
            <div>Developed by: <mark>Binay Kumar Pradhan</mark></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;