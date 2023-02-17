import Link from "next/link";
import Image from 'next/image'

function Navbar() {
    return (
        <nav className="flex">
            <div className="flex-auto">
            <Link href="/">
                <Image src="/images/ISAC.svg" alt="" width="100" height="85"/>
            </Link>
            <div className="flex-auto">
                <div>
                    <Link href="/events">Events</Link>
                </div>
                <div>
                    <Link href="/gallery">Gallery</Link>
                </div>
                <div>
                    <Link href="/links">Links</Link>
                </div>
                <div>
                    <Link href="#">Sponser ISAC</Link>
                </div>
                <div>
                    <Link href="/teams">
                    Team
                    </Link>
                    <ul>
                    <li><Link href="#">2023</Link></li>
                    <li><Link href="#">2022</Link></li>
                    </ul>
                </div>
                <div className="flex flex-column text-sm text-gray-500 dark:text-gray-400">
                <Link href="https://www.facebook.com/isacottbus/" target="_blank"><Image src='/images/youtube.svg' width="24" height="24"/>@isacottbus</Link>
                <Link href="https://www.facebook.com/isacottbus/" target="_blank"><Image src='/images/facebook.svg' width="22" height="22"/>@isacottbus</Link>
                <Link href="https://www.instagram.com/isac_cottbus/" target="_blank"><Image src='/images/instagram.svg' width="18" height="18"/>@isac_cottbus</Link>
                </div>
            </div>
            </div>
      </nav>  
    )
};

export default Navbar;

