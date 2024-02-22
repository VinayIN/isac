import { useState } from "react";
import Link from "next/link";
import { Menubar } from 'primereact/menubar';
import { useRouter } from 'next/router';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';
import { Avatar } from 'primereact/avatar';
import { Dropdown } from 'primereact/dropdown';

export default function Navbar() {
    const router = useRouter()
    const items = [
        {
            label: 'Events',
            icon: 'pi pi-fw pi-heart',
            command: () => { router.push('/events') }
        },
        {
            label: 'Gallery',
            icon: "pi pi-fw pi-images",
            command: () => { router.push('/gallery') }
        },
        {
            label: 'Links',
            icon: "pi pi-fw pi-link",
            command: () => { router.push('/links') }
        },
        {
            label: 'Sponsor ISAC',
            command: () => { router.push('/sponsor') }
        },
        {
            label: 'Teams',
            icon: "pi pi-w pi-users",
            command: () => { router.push('/teams') }
        },
        {
            label: 'Join the Community',
            icon: "pi pi-fw pi-info-circle",
            items: [
                {
                    label: 'Whatsapp',
                    icon: "pi pi-fw pi-whatsapp",
                    command: () => { router.push('https://chat.whatsapp.com/EMtoCcEhDWmHgwGThM3FDK') }
                },
                {
                    label: 'Facebook',
                    icon: "pi pi-fw pi-facebook",
                    command: () => { router.push('https://www.facebook.com/groups/BTUIndians/') }
                },
            ]
        },
    ]


    const logo = <Link href="/"> <img src="/images/logo.png" alt="" width="150" height="95"/> </Link>;

    return (

        <div className="m-auto">

            <Menubar model={items} start={logo} className="flex justify-content-between p-4" style={{ height: '200px', backgroundColor: '#071426', border: 'None', borderRadius:'0'}}/>

        </div>
    );
}