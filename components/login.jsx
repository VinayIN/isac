import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

export default function Login({visible, setVisible}) {
    
    const confirmation = (
        <div>
            <Button label="Login" severity="success" icon="pi pi-check" onClick={() => setVisible(false)} autoFocus />
        </div>
    );
    return (
        <Dialog header="Please enter your authentication credentials!" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)} footer={confirmation}>
            <div className="card flex justify-content-center">
                Under Construction
            </div>
        </Dialog>
    )
}