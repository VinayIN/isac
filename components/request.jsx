import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

export default function RequestLogin({visible, setVisible}) {
    
    const confirmation = (
        <div>
            <Button label="Cancel" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" />
            <Button label="Register" icon="pi pi-check" onClick={() => setVisible(false)} autoFocus />
        </div>
    );
    return (
        <Dialog header="Request Authentication code" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)} footer={confirmation}>
            <div className="card flex justify-content-center">
                Under Construction
            </div>
        </Dialog>
    )
}