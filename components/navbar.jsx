import { useState } from "react";
import Link from "next/link";
import { Menubar } from 'primereact/menubar';
<<<<<<< HEAD
import { useRouter } from 'next/router'
import { InputText } from 'primereact/inputtext';
import { Divider } from 'primereact/divider';
import { Button } from 'primereact/button';
import RequestLogin from "./request";
import Login from "./login";
        
=======
import { useRouter } from 'next/router';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';
import { Avatar } from 'primereact/avatar';
import { Dropdown } from 'primereact/dropdown';
>>>>>>> new_ui

export default function Navbar() {
    const router = useRouter()
    const items = [
        {
            label: 'Events',
            icon: 'pi pi-fw pi-heart',
<<<<<<< HEAD
            command: ()=>{ router.push('/events') }
=======
            command: () => { router.push('/events') }
>>>>>>> new_ui
        },
        {
            label: 'Gallery',
            icon: "pi pi-fw pi-images",
<<<<<<< HEAD
            command: ()=>{ router.push('/gallery') }
        },
        {
            label: 'links',
            icon: "pi pi-fw pi-link",
            command: ()=>{ router.push('/links') }
        },
        {
            label: 'Sponser ISAC',
            command: ()=>{ router.push('/sponser') }
=======
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
>>>>>>> new_ui
        },
        {
            label: 'Teams',
            icon: "pi pi-w pi-users",
<<<<<<< HEAD
            items: [
                {
                    label: '2022',
                    command: ()=>{ router.push('/teams') }
                },
                {
                    label: '2023',
                    command: ()=>{ router.push('/teams') }
                },

            ]
        }
    ]
    const [visibleRegister, setVisibleRegister] = useState(false);
    const [visibleLogin, setVisibleLogin] = useState(false);

    const logo = <Link href="/"> <img src="/images/ISAC.svg" alt="" width="100" height="85" className="mr-2"/> </Link>;
    const social = <div className="flex flex-column gap-2">
                        <div className="flex flex-row">
                            <InputText placeholder="Not yet available" type="text" />
                            <div className="flex flex-column gap-2">
                                <Link href="#"><i className="pi pi-youtube px-2"/></Link>
                                <Link href="https://www.facebook.com/isacottbus/" target="_blank"><i className="pi pi-facebook px-2"/></Link>
                                <Link href="https://www.instagram.com/isac_cottbus/" target="_blank"><i className="pi pi-instagram px-2"/></Link>
                            </div>
                        </div>
                        <div className="flex flex-row gap-2">
                            <Button label="Request" icon="pi pi-user-plus" onClick={() => setVisibleRegister(true)} text raised />
                            <RequestLogin visible={visibleRegister} setVisible={setVisibleRegister}/>
                            <Button label="Login" severity="success" icon="pi pi-sign-in" onClick={() => setVisibleLogin(true)} iconPos="right" text raised />
                            <Login visible={visibleLogin} setVisible={setVisibleLogin}/>
                        </div>
                    </div>

    return (
        <div className="navigation">
            <div className="card">
                <Menubar model={items} start={logo} end={social} style={{height: "150px"}}/>
            </div>
            <Divider/>
        </div>
    );
}
=======
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
>>>>>>> new_ui
