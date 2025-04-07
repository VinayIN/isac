import Link from "next/link";
import Image from "next/image";
import { Menubar } from 'primereact/menubar';

export default function Navbar() {
    const items = [
        {
            label: 'Events',
            icon: 'pi pi-fw pi-heart',
            template: (item) => (
                <Link href="/events" className="p-menuitem-link">
                    <span className={item.icon}></span>
                    <span className="p-menuitem-text">{item.label}</span>
                </Link>
            )
        },
        {
            label: 'Gallery',
            icon: "pi pi-fw pi-images",
            template: (item) => (
                <Link href="/gallery" className="p-menuitem-link">
                    <span className={item.icon}></span>
                    <span className="p-menuitem-text">{item.label}</span>
                </Link>
            )
        },
        {
            label: 'Links',
            icon: "pi pi-fw pi-link",
            items: [
                {
                    label: "Admission Procedure",
                    icon: "pi pi-fw pi-angle-right",
                    template: (item) => (
                        <Link href="/links#admission-procedure" className="p-menuitem-link">
                            <span className={item.icon}></span>
                            <span className="p-menuitem-text">{item.label}</span>
                        </Link>
                    )
                },
                {
                    label: "Accomodation",
                    icon: "pi pi-fw pi-angle-right",
                    template: (item) => (
                        <Link href="/links#accomodation" className="p-menuitem-link">
                            <span className={item.icon}></span>
                            <span className="p-menuitem-text">{item.label}</span>
                        </Link>
                    )
                },
                {
                    label: "City Registration",
                    icon: "pi pi-fw pi-angle-right",
                    template: (item) => (
                        <Link href="/links#city-registration" className="p-menuitem-link">
                            <span className={item.icon}></span>
                            <span className="p-menuitem-text">{item.label}</span>
                        </Link>
                    )
                },
                {
                    label: "Bank Account",
                    icon: "pi pi-fw pi-angle-right",
                    template: (item) => (
                        <Link href="/links#bank-account" className="p-menuitem-link">
                            <span className={item.icon}></span>
                            <span className="p-menuitem-text">{item.label}</span>
                        </Link>
                    )
                },
                {
                    label: "Reaching Cottbus",
                    icon: "pi pi-fw pi-angle-right",
                    template: (item) => (
                        <Link href="/links#reaching-cottbus" className="p-menuitem-link">
                            <span className={item.icon}></span>
                            <span className="p-menuitem-text">{item.label}</span>
                        </Link>
                    )
                },
                {
                    label: "Emergency Contacts",
                    icon: "pi pi-fw pi-angle-right",
                    template: (item) => (
                        <Link href="/links#emergency-contact" className="p-menuitem-link">
                            <span className={item.icon}></span>
                            <span className="p-menuitem-text">{item.label}</span>
                        </Link>
                    )
                },
            ]
        },
        {
            label: 'Sponsor ISAC',
            template: (item) => (
                <Link href="/sponsor" className="p-menuitem-link">
                    <span className="p-menuitem-text">{item.label}</span>
                </Link>
            )
        },
        {
            label: 'Teams',
            icon: "pi pi-w pi-users",
            template: (item) => (
                <Link href="/teams" className="p-menuitem-link">
                    <span className={item.icon}></span>
                    <span className="p-menuitem-text">{item.label}</span>
                </Link>
            )
        },
        {
            label: 'Join the Community',
            icon: "pi pi-fw pi-info-circle",
            items: [
                {
                    label: 'Whatsapp',
                    icon: "pi pi-fw pi-whatsapp",
                    command: () => { window.open('https://chat.whatsapp.com/EMtoCcEhDWmHgwGThM3FDK', '_blank') }
                },
                {
                    label: 'Facebook',
                    icon: "pi pi-fw pi-facebook",
                    command: () => { window.open('https://www.facebook.com/groups/BTUIndians/', '_blank') }
                },
            ]
        },
    ];

    const logo = (
        <Link href="/">
            <Image 
                src="/images/logo.png" 
                alt="ISAC Logo" 
                width={150} 
                height={95}
                className="logo-image"
            />
        </Link>
    );

    return (
        <div className="m-auto">
            <Menubar 
                model={items} 
                start={logo} 
                className="flex justify-content-between p-4" 
                style={{ 
                    height: '200px', 
                    backgroundColor: '#071426', 
                    border: 'None', 
                    borderRadius: '0'
                }}
            />
        </div>
    );
}