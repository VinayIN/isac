import Link from "next/link";
import { Menubar } from 'primereact/menubar';
import { useRouter } from 'next/router'
import { InputText } from 'primereact/inputtext';
import { Divider } from 'primereact/divider';
import { Button } from 'primereact/button';

export default function Navbar() {
    const router = useRouter()
    const items = [
        {
            label: 'Events',
            icon: 'pi pi-fw pi-heart',
            command: ()=>{ router.push('/events') }
        },
        {
            label: 'Gallery',
            icon: "pi pi-fw pi-images",
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
        },
        {
            label: 'Teams',
            icon: "pi pi-w pi-users",
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

    const logo = <Link href="/"> <img src="/images/ISAC.svg" alt="" width="100" height="85" className="mr-2"/> </Link>;
    const social = <div className="flex flex-column gap-2">
                        <div className="flex flex-row">
                            <InputText placeholder="Search" type="text" />
                            <div className="flex flex-column gap-2">
                                <Link href="#"><i className="pi pi-youtube px-2"/></Link>
                                <Link href="https://www.facebook.com/isacottbus/" target="_blank"><i className="pi pi-facebook px-2"/></Link>
                                <Link href="https://www.instagram.com/isac_cottbus/" target="_blank"><i className="pi pi-instagram px-2"/></Link>
                            </div>
                        </div>
                        <div className="flex flex-row gap-2">
                            <Button label="Request" icon="pi pi-user-plus" text raised />
                            <Button label="Login" severity="success" icon="pi pi-sign-in" iconPos="right" text raised />
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
