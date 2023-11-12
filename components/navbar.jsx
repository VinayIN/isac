import { useState } from "react";
import Link from "next/link";
import { Menubar } from 'primereact/menubar';
import { useRouter } from 'next/router'
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
    const accountMenu = [
        { label: 'Login', icon: 'pi pi-fw pi-user-plus mx-10', command: () => {router.push('/login')} },
        { label: 'Register', icon: 'pi pi-fw pi-sign-in mx-10', command: () => {router.push('/register')} },
    ];
    const [selectedAccount, setSelectedAccount] = useState(null);

    const onAccountChange = (e) => {
        setSelectedAccount(e.value);
        // Perform action based on selection
        e.value.command();
    };
    const accountItemTemplate = (option) => {
        return (
          <div className="p-flex p-ai-center">
            <i className={option.icon} ></i>
            <span className="p-ml-2">{option.label}</span>
          </div>
        );
      };

      
    const logo = <Link href="/"> <img src="/images/logo.png" alt="" width="145" height="80" className="mr-2"/> </Link>;
    const social = <div className="flex flex-row gap-2">
                        {/* <div className="flex flex-row align-items-center">
                            <div className="flex flex-row gap-2">
                                <Link href="#"><i className="pi pi-youtube px-2"/></Link>
                                <Link href="https://www.facebook.com/isacottbus/" target="_blank"><i className="pi pi-facebook px-2"/></Link>
                                <Link href="https://www.instagram.com/isac_cottbus/" target="_blank"><i className="pi pi-instagram px-2"/></Link>
                            </div>
                        </div> */}
                        {/* <div className="flex flex-row gap-2">
                            <Button label="Request" icon="pi pi-user-plus" onClick={() => setVisibleRegister(true)} text raised />
                            <RequestLogin visible={visibleRegister} setVisible={setVisibleRegister}/>
                            <Button label="Login" severity="success" icon="pi pi-sign-in" onClick={() => setVisibleLogin(true)} iconPos="right" text raised />
                            <Login visible={visibleLogin} setVisible={setVisibleLogin}/>
                        </div> */}
                        <Dropdown value={selectedAccount} options={accountMenu} 
                            onChange={onAccountChange} optionLabel="label" 
                            itemTemplate={accountItemTemplate}
                            placeholder= "User" />
                    </div>

    return (
        
        <div className="nevigation">
           
                <Menubar model={items} start={logo} end={social}/>
               
                 </div>
    );
}